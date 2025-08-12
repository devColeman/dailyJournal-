const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journal')

router.get('/', journalController.getIndex)



// your in /test already you dont have to put /test first cause this route is already in it
// you can add any all the different thing you want to do used the tag // test


module.exports = router