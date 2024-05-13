const mongoose = require('mongoose')
const userImageSchema = require('../schema/userImageSchema')
const userImageModel = mongoose.model('images' , userImageSchema)

module.exports = userImageModel