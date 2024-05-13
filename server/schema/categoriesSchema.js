const mongoose = require('mongoose')
const schema = mongoose.Schema
const categoriesSchema = new schema({
    categoryName : {
        type : String
    },
    createdBy: {
        type : String
    }

});

module.exports = categoriesSchema