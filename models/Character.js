const mongoose = require('mongoose')

let Character = new mongoose.Schema({
    alias: String,
    occupation: String,
    gender: String,
    place_of_birth: String,
    abilities: String,
    played_by: String,
    image_path: String
})
module.exports = mongoose.model('Character', Character)