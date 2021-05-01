// Load the things we need
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

// required module to make calls to a REST API
const axios = require('axios');
const { response } = require('express');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Index page
app.get('/', function(req, res) {

    res.render('pages/index');
});

//Post function which will be doing the processing of data and vector of movement to the user
app.post('/action_page', function(req,res){

    //Selection will be getting the option selected from the dropdown box, returning its position and the position will be used to locate the correct information from the dictionary
    var selection = req.body.coding_language
    //console.log(selection); --This was used in order to see if I was correctly able to return the dropdown option I was picking.

    //A catch in case the user tries to be funny and enter default dropdown value
    if(selection == "err")
    {
        res.render('pages/redo_result');
        return
    }

    //Connection to our API, enables us to access and withdraw info from it
    axios.get('https://cwrvx8v6xj.execute-api.us-east-2.amazonaws.com/default/apitest')
    .then((response)=>{

        //console.log(response.data); --This was used in order to see if all the data from the api was being correctly accessed/displayed.
        var tagline = "Information on Chosen Language:"
        res.render('pages/result', {
            programming_language: response.data, //Passing through the API information/dictionaries as a variable which will be used in the ejs files
            tagline: tagline, //Just the text data above passed through as a variable, could just be done as html in the ejs files, but worked with it as I emulated most of the classwork code's structure
            selection: selection //This takes the selection variable defined above and just passes it through a variable which will be accessible in the ejs files.
        });
    });
    

});

//code to set up the local connection which will be used to display the webpage & elements
const port = 3000
app.listen(port, () => {
    console.log(`Front-end app listening at http://localhost:${port}`)
})
