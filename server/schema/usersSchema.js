const mongoose = require('mongoose')
const schema = mongoose.Schema
const usersSchema = new schema({
    userName : {
        type : String
    },
    password : {
        type :String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    },
    state : {
        type : Boolean,
        default : true
    },
    lastLogin : {
        type : Date
    },
    createdAt : {
        type :Date
    }
})
module.exports = usersSchema