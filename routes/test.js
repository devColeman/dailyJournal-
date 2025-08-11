const express = require('express')
const router = express.Router()
const testController = require('../controllers/test')

router.get('/', testController.getIndex)


// your in /test already you dont have to put /test first cause this route is already in it
// you can add any all the different thing you want to do used the tag // test


module.exports = router