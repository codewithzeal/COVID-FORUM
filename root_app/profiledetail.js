var express=require('express');
const session = require('express-session') ;
var app=express.Router();
app.use(express.static(__dirname+'/public/forum'));
var db=require('./Datbase_connect.js');
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public/login'));
app.use(express.json());
app.use(session({secret: 'Your_Secret_Key',resave:false,saveUninitialized:false})) 
app.post('/detail',(req,res)=>{
    sql=db.connect();
    var querry="select name,profilePic from users where name='"+req.session.take+"'";
    sql.query(querry,(err,result)=>{
        if(err) throw err;
        else
        {
            res.send(result);
        }
    })
});
module.exports=app;