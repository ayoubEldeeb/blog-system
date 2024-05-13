const express = require('express')
const mongoose = require('mongoose')


const db = mongoose.connect('mongodb://localhost/blogSystem',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.log(err)
})

module.exports = db
