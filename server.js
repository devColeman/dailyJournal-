const express = require('express')
const app = express()

const homeRoutes = require('./routes/home')
const journalRoute = require('./routes/journal')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/journal', journalRoute)

app.listen(3000, ()=> {
    console.log('Hey this runs')
})