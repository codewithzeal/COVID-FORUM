var express=require('express');
const session = require('express-session') ;
var app=express.Router();
app.use(express.static(__dirname+'/public/forum'));
var db=require('./Datbase_connect.js');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname + '/public/login'));
app.use(session({secret: 'Your_Secret_Key',resave:false,saveUninitialized:false})) 
app.get('/forum',(req,res)=>{
    if(req.session.take)
res.render('forum.ejs',{username:req.session.take});
else
res.redirect('/welcome')
});

app.post('/forum',(req,res)=>{
    var title=req.body.title;
    var body=req.body.body;
    var sql=db.connect();
    var query="Insert into `forum`(`asker`,`title`,`question`) VALUES('"+req.session.take+"','"+title+"','"+body+"')";
    sql.query(query,(err,result)=>{
        if(err)
        throw err
        else
        {
            res.send("Ok");
        }
    })
})

module.exports=app;