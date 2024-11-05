const mongoose = require('mongoose')

const Schema = mongoose.Schema

const notesSchema = new Schema({
    star:{
        type: String,
        required: true
    },
    physical: {
        type: String,
        required: false
    },
    note: {
        type: String,
        required: true
    }
},{timestamps:true})

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;