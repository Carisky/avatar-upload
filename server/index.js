// app.js (or server.js)

const express = require('express');
const routes = require('./routes'); // Import the index.js file
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.static('uploads')); // Serve static files from the 'uploads' folder

app.use(cors());
// Mount the routes under the root path
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
