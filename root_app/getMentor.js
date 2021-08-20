const session = require('express-session') 
var express = require('express')
var app = express.Router();
var db=require('./Datbase_connect.js');
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public/login'));
app.use(express.json());
app.use(session({secret: 'Your_Secret_Key',resave:false,saveUninitialized:false})) 
app.post('/getmentor',(req,res)=>{
    //console.log("here");
    sql=db.connect();
    var query="select * from forum";
    sql.query(query,(err,result)=>{
        if(err) throw err;
        else
        {
            res.send(result);
            //console.log(result);
        }

    })
})
module.exports=app;