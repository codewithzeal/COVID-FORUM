var express =require('express');
var db=require('./Datbase_connect.js');
const upload=require('./uploadPic.js');
var app=express.Router();
app.use(express.static(__dirname + '/uploads'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/postHere',(req,res)=>{
    if(req.session.take)
    res.render('createPost.ejs',{name:req.session.take});
    else
    res.redirect('/welcome');
});
app.post('/postHere',(req,res)=>{
    var sql=db.connect();
upload(req,res,(err)=>{
    if(err)
    console.log("Error uploading pic");
    else
    {
        title=req.body.title;
        content=req.body.content;
        querry="insert into `posts` (`name`,`title`,`text`,`file`) VALUES('"+req.session.take+"','"+title+"','"+content+"','"+name+"')";
        sql.query(querry,(err,result)=>{
            if(err) throw err;
            else
            {
                res.redirect('/welcome');
            }
        })
    }
});
});
module.exports=app;