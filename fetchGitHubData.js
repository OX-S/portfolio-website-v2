// fetchGitHubData.js
require('dotenv').config();
import axios from 'axios';
import fs from 'fs';

const repoUrls = [
    'https://github.com/OX-S/react-pictionary-game',
    'https://github.com/ArcticDevelopment/ArcticTools',
    'https://github.com/OX-S/pyopengl-mandelbrot',
    'https://github.com/OX-S/ShoppingList',
    'https://github.com/OX-S/Portfolio-Website'
];

function parseRepoUrl(url) {
    const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
    const match = url.match(regex);
    if (match) {
        return { owner: match[1], repo: match[2] };
    } else {
        throw new Error(`Invalid GitHub URL: ${url}`);
    }
}

async function fetchData() {
    const token = process.env.GITHUB_TOKEN;
    const headers = token
        ? { Authorization: `token ${token}` }
        : {};

    const repoDataList = [];

    for (const url of repoUrls) {
        try {
            const { owner, repo } = parseRepoUrl(url);

            const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
                headers,
            });

            const data = response.data;

            repoDataList.push({
                name: data.name,
                description: data.description,
                stars: data.stargazers_count,
                forks: data.forks_count,
                language: data.language,
                url: data.html_url,
            });

            console.log(`Fetched data for ${owner}/${repo}`);
        } catch (error) {
            console.error(`Error fetching data for ${url}: ${error.message}`);
        }
    }

    fs.writeFileSync('repoData.json', JSON.stringify(repoDataList, null, 2));
    console.log('Data saved to repoData.json');
}

fetchData().then();
