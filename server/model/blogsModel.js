const mongoose = require('mongoose')
const blogsSchema = require('../schema/blogsSchema')
const blogsModel = mongoose.model('blogs' , blogsSchema)

module.exports = blogsModel