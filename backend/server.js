require('dotenv').config()
const express = require('express')
const notesRoutes = require('./routes/notesRoutes.js')
const exoRoutes = require('./routes/exoRoutes.js')
const homeRoutes = require('./routes/homeRoutes.js')
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");

//middleware

// to user req.body
app. use(express.json())
app.use(cors());

//to log routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/notes', notesRoutes);
app.use('/exoplanets', exoRoutes);
app.use('./Home', homeRoutes);

//mongodb
mongoose.connect(process.env.MONGO_URI)
    .then( ()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("connected to database & lilstening on port", process.env.PORT) 
        });
    })
    .catch( (error)=>{console.log(error)});

