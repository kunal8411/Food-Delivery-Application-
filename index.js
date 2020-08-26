const express= require('express');

const path= require('path');
const port=8080;

const app= express();


app.use(express.urlencoded());

const db = require('./config/mongoose')
const passport= require('passport');

const passportLocal= require('./config/passport-local-strategy');

//to include static files 
app.use(express.static('./assets'));


//for layout
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);
// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);


//set up view engine
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));  
app.set('views','./views');
app.use(passport.initialize());
app.use(passport.session());

//check if session cookie is present or not 
app.use(passport.setAuthenticateduser);

//transfwe to route
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log('unable to connect to port');
    }

    console.log('server is running on port:',port);
})