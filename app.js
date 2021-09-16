//Import modules

var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

//All routes are in this folder
var routes = require("./routes/route");

var app = express();

//MongoDb connection
mongoose.connect('mongodb://localhost:27017/contactlist');

//Check for successful connection
mongoose.connection.on('connected',()=>
{
  console.log("Connected to MongoDB @ 27017");
});
mongoose.connection.on('Error',(err)=>
{
    if(err)
    {
        console.log("Connected to MongoDB failed " + err); 
    }
  
});


//Port number
const port = 3000; //Subject to change based on number by MongoDb on startup

//Add middleware
app.use(cors());

//Add body-parser
app.use(bodyparser.json());

//Add routes
app.use('/api',routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server test
app.get("/", (req, res)=>
{
    res.send('foobar');
});

app.listen(port,()=>
{
  console.log("Server started at port: " + port);
});

//Remember to start MongoDb server first
//To start nodemon = npm run server
//To start angular, Go to UI folder then = ng serve
//Postman is used for API testing
//UI from Bootswatch