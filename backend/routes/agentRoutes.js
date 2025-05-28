const express = require('express');
const router = express.Router();
const { addAgent, getAgents, deleteAgent } = require('../controllers/agentController');

// POST /api/agents - Add a new agent
router.post('/addAgent', addAgent);

// GET /api/agents - Get all agents
router.get('/getAgents', getAgents);

router.delete('/:id', deleteAgent);

module.exports = router;
