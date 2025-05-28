const path = require('path');
const fs = require('fs');
const Agent = require('../models/Agent');
const Task = require('../models/Task');
const { parseCSV } = require('../utils/csvParser');

const uploadAndDistribute = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const ext = path.extname(req.file.originalname);
    if (!['.csv', '.xlsx', '.xls'].includes(ext)) {
      return res.status(400).json({ message: 'Invalid file type' });
    }

    const entries = await parseCSV(req.file.path, ext);
    if (!Array.isArray(entries) || !entries.length) {
      return res.status(400).json({ message: 'CSV is empty or invalid' });
    }

    const validFields = ['FirstName', 'Phone', 'Notes'];
    const invalid = entries.some(e => !validFields.every(f => Object.keys(e).includes(f)));
    if (invalid) return res.status(400).json({ message: 'CSV format is invalid' });

    const agents = await Agent.find();
    const agentCount = agents.length;

    if (agentCount === 0) {
      return res.status(400).json({ message: 'No agents found to assign tasks' });
    }

    const distributedTasks = entries.map((item, index) => {
      const agent = agents[index % agentCount];
      return {
        firstName: item.FirstName,
        phone: item.Phone,
        notes: item.Notes,
        agent: agent._id,
      };
    });

    await Task.insertMany(distributedTasks);

    // Delete temp uploaded file
    fs.unlinkSync(req.file.path);

    res.status(201).json({ message: 'Tasks distributed successfully', count: distributedTasks.length });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Server error while uploading' });
  }
};

// GET /api/upload/tasks
const getTasksByAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    const results = [];

    for (const agent of agents) {
      const tasks = await Task.find({ agent: agent._id }).select('-__v');
      results.push({
        agent: {
          _id: agent._id,
          name: agent.name,
          email: agent.email,
          mobile: agent.mobile,
        },
        tasks,
      });
    }

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching tasks by agent:', error);
    res.status(500).json({ message: 'Failed to fetch tasks by agent' });
  }
};

module.exports = { uploadAndDistribute, getTasksByAgents };
