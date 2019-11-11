/**
 * @version 0.5.0
 * @author [Grayson Orr](https://github.com/grayson-orr)
 */

const bodyParser = require('body-parser')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

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

app.get('/login', (req, res) => {
  res.render('login')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
