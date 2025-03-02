const express = require('express');
const app = express();
const { fetchData } = require('./fetchGitHubData');
const path = require('path');

let repoData = [];
const updateData = async () => {
    try {
        await fetchData();
        repoData = require('./repoData.json');
        console.log('GitHub data updated successfully');
    } catch (error) {
        console.error('Error updating GitHub data:', error);
    }
};

setInterval(updateData, 12 * 60 * 60 * 1000);

updateData().then();

app.get('/api/repos', (req, res) => {
    res.json(repoData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});