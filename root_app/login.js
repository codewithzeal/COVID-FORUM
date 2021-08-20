const session = require('express-session') 
var express = require('express')
var app = express.Router();
var db=require('./Datbase_connect.js');
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(session({secret: 'Your_Secret_Key',resave:false,saveUninitialized:false})) 
app.get('/login',(req,res)=>{
    res.render('login.ejs');
})
app.post('/login',(req,res)=>{
var sql=db.connect();
Uname=req.body.name;
password=req.body.password;
var query="select name,password,userType from users where name='"+Uname+"' and password='"+password+"'";
sql.query(query,(err,result)=>{
    if(err)
    {
        console.log("Login database error");
        res.send("Failed");
    }
    else
    {
        if(result.length)
        {
            req.session.take=Uname;
            if(result[0].userType=="1")
            req.session.mentor=Uname;
            res.redirect('/welcome');
        }
        else
        res.send("N");
    }
})
})
module.exports=app;