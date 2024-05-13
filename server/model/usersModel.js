const mongoose = require('mongoose')
const usersSchema = require('../schema/usersSchema')
const usersModel = mongoose.model('users' , usersSchema)

module.exports = usersModel