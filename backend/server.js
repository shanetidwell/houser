const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const user_controller = require("./controllers/user_controller");
const property_controller = require("./controllers/property_controller");
const checkForSession = require("./middlewares/sessionCreator");


const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     secure: false,
    //     sameSite: false
    // }
}))

app.use(cors());
// app.use(cors({origin: "http://localhost:3000", credentials: true}));

// app.use(express.static('../frontend/build'));

massive(process.env.CONNECTION_STRING)
.then(db=>{
    app.set('db', db)
});

app.use(checkForSession.createSession);
//User Controller
app.post('/api/auth/login', user_controller.login);
app.post('/api/auth/register', user_controller.register);
app.post('/api/auth/logout', user_controller.logout);

//Property Controller
app.post('/api/properties', property_controller.add_property);
app.get('/api/properties', property_controller.get_properties);
app.delete('/api/properties/:id', property_controller.delete_property);

const port = process.env.port || 3005;
app.listen(port, ()=>{
    console.log('listening on port' , port);
})
