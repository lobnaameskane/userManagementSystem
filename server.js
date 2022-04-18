const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


 const dotenv   = require('dotenv');

// const authRoute = require('./routes/auth');
// const postRoute = require('./routes/posts');
// const conversationRoute = require("./routes/conversations");
// const messageRoute = require("./routes/messages");
const cors = require('cors');

app.use(cors());

dotenv.config();

app.set('view engine', 'hbs');
// app.use(express.json());

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
const mysql = require('mysql');

const router = express.Router();
const userRoute = require('C:/Users/hp/Desktop/html/routes/userRoute');
const commandRoute = require('C:/Users/hp/Desktop/html/routes/commandRoute');
const commandClientRoute = require('C:/Users/hp/Desktop/html/routes/commandClientRoute');



app.use("/" ,userRoute);
app.use("/commande" ,commandRoute);
app.use("/commandClient" , commandClientRoute);



const methodeOverride = require("method-override");
app.use(methodeOverride('_method'));

app.listen(5000,()=> {
    console.log('server running')
})


 

 
// create application/json parser
 
// create application/x-www-form-urlencoded parser
 
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})