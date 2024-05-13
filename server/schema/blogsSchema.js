const mongoose = require('mongoose')
const schema = mongoose.Schema
const blogsSchema = new schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    category : {
        type : String
    },
    createdBy : {
        type : String
    }

});

module.exports = blogsSchema