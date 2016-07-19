/* Instructions:

Today you will be building a Node / Express based web applications for handling reservation requests.

Your application will be made up of two parts: 1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.

Spend the time necessary to map this application out. Consider the concepts we've covered in class so far:

Servers
Routing
APIs
AJAX (GET and POST Requests)
You should be referencing the code from the previous Star Wars application.

Feel encouraged to use the following application as a reference: http://hot-restaurant.herokuapp.com/

Note: We know this is a hard activity. We know you aren't yet comfortable with Node or Express. But push yourself. The best way to learn is to push through the discomfort and BUILD! Ask for help when you need it. We're here to help you through the process. */

var express= require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var tables = [
{
	routeName: "",
	name: "",
	phone: "",
	email: "",
	uniqueId: ""
},
{
	routeName: "",
	name: "",
	phone: "",
	email: "",
	uniqueId: ""
},
{
	routeName: "",
	name: "",
	phone: "",
	email: "",
	uniqueId: ""
},
{
	routeName: "",
	name: "",
	phone: "",
	email: "",
	uniqueId: ""
},
{
	routeName: "",
	name: "",
	phone: "",
	email: "",
	uniqueId: ""
}
];
var counter = 0;

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'view.html'));
})

app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname, 'tables.html'));
})

app.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname, 'reserve.html'));
})

// app.get('/api/:tables?', function(req, res){
// 	var currentTable = req.params.tables;
// 	//console.log(req);
// 	if(currentTable){
// 		console.log(currentTable);
// 		for(var i = 0; i < tables.length; i++){
// 			//if()
// 		}
// 	}
// } )






app.listen(app.get('port'),function(){
    console.log('Experss started on http://localhost:' + app.get('port') +" press cntrl-C to exit");
});
















