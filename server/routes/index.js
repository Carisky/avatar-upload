// routes/index.js

const express = require('express');
const fileUploadRouter = require('./fileUploadRouter');

const router = express.Router();

// Mount the fileUploadRouter under the '/file' path
router.use('/upload', fileUploadRouter);

module.exports = router;
