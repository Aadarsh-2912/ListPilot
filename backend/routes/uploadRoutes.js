const express = require('express');
const multer = require('multer');
const router = express.Router();
const { uploadAndDistribute, getTasksByAgents } = require('../controllers/uploadController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadAndDistribute);
router.get('/tasks', getTasksByAgents);

module.exports = router;
