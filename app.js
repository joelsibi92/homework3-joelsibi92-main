// load the things we need
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

// required module to make calls to a REST API
const axios = require('axios');
const { response } = require('express');

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {

    res.render('pages/index');
});

app.post('/action_page', function(req,res){

    var selection = req.body.coding_language
    console.log(selection);

    axios.get('https://cwrvx8v6xj.execute-api.us-east-2.amazonaws.com/default/apitest')
    .then((response)=>{

        console.log(response.data);
        var tagline = "Information on Chosen Language:"
        res.render('pages/result', {
            programming_language: response.data,
            tagline: tagline,
            selection: selection
        });
    });
    

});

const port = 3000
app.listen(port, () => {
    console.log(`Front-end app listening at http://localhost:${port}`)
})
