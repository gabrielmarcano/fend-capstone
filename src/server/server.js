var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

/* Endpoints */

// Data

var projectData = {};

// GET root
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// GET Route To Return Endpoint Data
app.get("/data", (request, response) => {
    response.send(projectData);
});

// POST Route To Add Data to projectData
app.post("/add", (request, response) => {
    projectData = request.body;
    console.log(projectData);
});