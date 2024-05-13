const express = require('express')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { clear } = require('console');
const router = express.Router()
const usersController = require('../controller/usersController')
const categoriesController = require('../controller/categoriesController')
const blogsController = require('../controller/blogsController')
const userImageController = require('../controller/userImageController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'public/users';
        fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
      }
  })

  const upload = multer({ storage: storage })

router.post('/login' , usersController.login)
router.post('/signup' , usersController.signup)

router.post('/addBlog' , blogsController.create)


router.post('/addCategory' , categoriesController.create)
router.post('/getAll' , categoriesController.getAll)
router.delete('/deleteCat' ,categoriesController.deleteCat)

module.exports = router