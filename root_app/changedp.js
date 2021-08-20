
var express=require('express');
var app=express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
var db=require('./Datbase_connect.js');
const upload=require('./uploadPic.js');
app.post('/changedp',(req,res)=>{
    var sql=db.connect();
upload(req,res,(err)=>{
    if(err)
    console.log("Error uploading pic");
    else
    {
        querry="update users set profilePic='"+req.file.filename+"' where name='"+req.session.take+"'";
        sql.query(querry,(err,result)=>{
        if(err) throw err;
        else
        {
            res.send('welcome');
            
        }
    })

    }
});
})
module.exports=app;
