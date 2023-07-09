var path = require('path')
const express = require('express')
const nplAPIResponse = require('./nplAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
  }))

app.use(express.static('dist'))

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})

console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

const apiKEY = {}


app.get('/analisys', function (req, res) {
    res.send(nplAPIResponse)
})