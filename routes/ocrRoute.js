const express = require('express');
const controller = require('../controller/ocrController');

const router = express.Router();


 router.post('/', controller.ocr);

 module.exports = router;