const Agent = require('../models/Agent');

const addAgent = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const agentExists = await Agent.findOne({ email });
    if (agentExists) {
      return res.status(400).json({ message: 'Agent already exists' });
    }

    const newAgent = new Agent({ name, email, mobile, password });
    await newAgent.save();

    res.status(201).json({
      message: 'Agent created successfully',
      agent: {
        id: newAgent._id,
        name: newAgent.name,
        email: newAgent.email,
        mobile: newAgent.mobile,
      },
    });
  } catch (error) {
    console.error('Add Agent Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch all agents
const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find().select('-password'); // exclude passwords
    res.status(200).json(agents);
  } catch (error) {
    console.error('Fetch Agents Error:', error);
    res.status(500).json({ message: 'Server error while fetching agents' });
  }
};

// Delete agent by ID
const deleteAgent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAgent = await Agent.findByIdAndDelete(id);

    if (!deletedAgent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    res.status(200).json({ message: 'Agent deleted successfully' });
  } catch (error) {
    console.error('Delete Agent Error:', error);
    res.status(500).json({ message: 'Server error while deleting agent' });
  }
};

module.exports = { addAgent, getAgents, deleteAgent };
