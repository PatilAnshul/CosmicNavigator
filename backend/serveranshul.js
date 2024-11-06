const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let recentEntries = []; // Array to store user entries

app.post('/api/save-user', (req, res) => {
    const { name, email } = req.body;
    console.log('User Data:', { name, email });

    // Add the new entry to the beginning of the array
    recentEntries.unshift({ name, email });

    // Keep only the 3 most recent entries
    if (recentEntries.length > 3) {
        recentEntries.pop();
    }

    res.status(200).send({ message: 'User data saved successfully!' });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Cosmic API Server! ');
});

app.get('/api/recent-entries', (req, res) => {
    res.status(200).json(recentEntries); // Send the recent entries
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
