const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer');
const file = multer()
const path = require('path');
const router = require('./router/router')
const port = 3000
const db = require('./config/config')

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json())
app.use(router)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))