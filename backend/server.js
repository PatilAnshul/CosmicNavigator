require('dotenv').config()
const express = require('express')
const notesRoutes = require('./routes/NotesRoutes.js')
const mongoose = require('mongoose')
const app = express();

//middleware

// to user req.body
app. use(express.json())
//to log routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/notes', notesRoutes);


//mongodb
mongoose.connect(process.env.MONGO_URI)
    .then( ()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("connected to database & lilstening on port", process.env.PORT) 
        });
    })
    .catch( (error)=>{console.log(error)});

