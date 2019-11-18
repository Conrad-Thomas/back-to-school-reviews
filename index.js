const bodyParser = require('body-parser')
const express = require('express')
const fetch = require('node-fetch')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()
const port = 3000 | process.env.PORT

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

app.get('/', (req, res) => {
  res.render('index')
})

require('./routes/accessories')(app, fetch)
require('./routes/computers')(app, fetch)

app.listen(port, () => {
  console.log(`Back to School reviews now live.\n (Listening on port: ${port})`)
})


module.exports = app