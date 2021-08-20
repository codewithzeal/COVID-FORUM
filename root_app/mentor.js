const session = require('express-session') 
var express = require('express')
var app = express.Router();
var db=require('./Datbase_connect.js');
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public/login'));
app.use(express.json());
app.use(session({secret: 'Your_Secret_Key',resave:false,saveUninitialized:false})) 
app.post('/mentor',(req,res)=>{
    sql=db.connect();
    var query="update forum set mentor='"+req.session.mentor+"',solution='"+req.body.soln+"' where qid='"+req.body.qid+"'";
    sql.query(query,(err,result)=>{
        if(err) throw err;
        else
        {
            res.redirect('/forum');
        }

    })
})
module.exports=app;