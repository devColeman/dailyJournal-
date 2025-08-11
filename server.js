const express = require('express')
const app = express()

const homeRoutes = require('./routes/home')
const testRoute = require('./routes/test')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/test', testRoute)

app.listen(3000, ()=> {
    console.log('Hey this runs')
})