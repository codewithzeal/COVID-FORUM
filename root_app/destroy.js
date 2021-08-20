var express=require('express');
const session = require('express-session') 
var app=express.Router();
app.use(session({secret: 'Your_Secret_Key',resave:false,saveUninitialized:false})) 

app.get('/destroy',(req,res)=>{
    req.session.destroy();
    res.redirect('\welcome');
})
module.exports=app;