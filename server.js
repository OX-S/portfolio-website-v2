
const express = require('express');
const app = express();
const repoData = require('./public/repoData.json');

app.get('/api/repos', (req, res) => {
    res.json(repoData);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
