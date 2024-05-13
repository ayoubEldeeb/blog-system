const mongoose = require('mongoose')
const schema = mongoose.Schema
const userImageSchema = new schema({
    path : {
        type : String
    },
    userId: {
        type : String
    }

});

module.exports = userImageSchema