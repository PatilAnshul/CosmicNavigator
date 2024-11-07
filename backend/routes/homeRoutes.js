const express = require('express');
const router = express.Router()
const Home = require('../models/HomeModel')
// let recentEntries = []; // Array to store user entries

router.post('/save-user', async (req, res) => {
    const { name, email } = req.body;
    // console.log('User Data:', { name, email });

    // // Add the new entry to the beginning of the array
    // recentEntries.unshift({ name, email });

    // // Keep only the 3 most recent entries
    // if (recentEntries.length > 3) {
    //     recentEntries.pop();
    // }

    // res.status(200).send({ message: 'User data saved successfully!' });
    try {
        const home = await Home.create({ name, email })
        res.status(200).json(home)
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
});

router.get('/', (req, res) => {
    res.send('Welcome to the Cosmic API Server! ');
});

router.get('/recent-entries', async (req, res) => {
    //res.status(200).json(recentEntries); // Send the recent entries
    const home = await Home.find({}).sort({createdAt: -1}).limit(3);

  res.status(200).json(home )
});

module.exports = router;