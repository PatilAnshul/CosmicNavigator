require('dotenv').config()
const express = require('express')
const NotesRoutes = require('./routes/notesRoutes.js')
const ExoRoutes = require('./routes/exoRoutes.js')
const HomeRoutes = require('./routes/homeRoutes.js')
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
app.use('/notes', NotesRoutes);
app.use('/exoplanets', ExoRoutes);
app.use('/Home', HomeRoutes);

//mongodb
mongoose.connect(process.env.MONGO_URI)
    .then( ()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("Connected to database & listening on port", process.env.PORT) 
        });
    })
    .catch( (error)=>{console.log(error)});

