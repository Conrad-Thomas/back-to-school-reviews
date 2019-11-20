const bodyParser = require('body-parser')
const express = require('express')
const fetch = require('node-fetch')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./secrets')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

require('./routes/login')(app, fetch)
require('./routes/accessories')(app, fetch)
require('./routes/computers')(app, fetch)

app.use(function(req, res) {
  res.status(404)
  res.render('404')
})

app.listen(port, () => {
  console.log(`Back to School reviews now live.\n (Listening on port: ${port})`)
})

module.exports = app