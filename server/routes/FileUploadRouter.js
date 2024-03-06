// routes/fileUploadRouter.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  const uploadedFile = req.file;
  console.log('Uploaded file:', uploadedFile);

  // You can perform additional processing here

  res.json({ message: 'File uploaded successfully!' });
});

module.exports = router;
