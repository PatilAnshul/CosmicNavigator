const express = require('express');
const router = express.Router()
const exoplanet = require('../models/ExoModel')


router.get('/', async (req, res) => {   
    // console.log('before params')
    // const { xParam, yParam } = req.query;
    // console.log("inside get")
    try {
        // console.log('fetching star')
        // console.log(xParam, yParam);
        // Only select specified fields using projection
        // {}, { [xParam]: 1, [yParam]: 1, _id: 0 }
        const data = await exoplanet.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});

module.exports =router