const mongoose = require('mongoose')

const Schema = mongoose.Schema
const homeDb = mongoose.connection.useDb("FSD-BDT")

const homeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

},{timestamps:true},
{ collection: 'Home' })

const Home = homeDb.model('Home', homeSchema);

module.exports = Home;