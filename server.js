
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


////////// PSEUDO CODE ////////////

//// I have to somehow setup the modal to display the match of the user from the friend.js file.
