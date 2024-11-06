const mongoose = require('mongoose')

const Schema = mongoose.Schema
const notesDb = mongoose.connection.useDb("test")

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
},{timestamps:true},
{ collection: 'exoplanets' })

const Notes = notesDb.model('Notes', notesSchema);

module.exports = Notes;