const mongoose = require('mongoose')
const categoriesSchema = require('../schema/categoriesSchema')
const categoriesModel = mongoose.model('categories' , categoriesSchema)

module.exports = categoriesModel