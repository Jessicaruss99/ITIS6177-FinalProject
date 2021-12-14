const express = require('express');
const controller = require('../controller/analyzeImageController');

const router = express.Router();


 router.post('/', controller.analyzeImage);

 module.exports = router;