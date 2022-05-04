const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Built a continuous delivery pipeline!... This is the second commit'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
