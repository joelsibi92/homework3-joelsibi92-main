// load the things we need
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

// required module to make calls to a REST API
const axios = require('axios');

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.post('/action_page', function(req,res){

var selection = req.body.coding_language
console.log(selection);

});

const port = 3000
app.listen(port, () => {
    console.log(`Front-end app listening at http://localhost:${port}`)
})
