/*----------- 0. ENV -----------*/
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.API_KEY);
/*----------- 1. SERVER -----------*/
var path = require('path')
//Set up Express
const express = require('express')
const app = express()
/* Initialize the main project folder*/
app.use(express.static('dist'))
// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
    console.log('NLP App  is now listening on port 8081!')
   })
/*----------- END OF SERVER -----------*/



/*----------- 2. ROUTES -----------*/
/* Empty JS object to act as endpoint for all routes */
const projectData = [];
//Telling the server how to respond to HTTPS requests

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})



//declaring variables

const textapi = {
    application_key: process.env.API_KEY
};


//tell express to send appData when a GET request is made
app.get('/all', getKey)  //request is made from client side '/all'

  function getKey(req,res){
    res.send(textapi);
  }
