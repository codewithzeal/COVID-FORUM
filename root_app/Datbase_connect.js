const mysql=require('mysql');
var log={
    connect:function()
    {
    
    var config=
    {
        host: 'localhost',
        user: 'your_username',
        password: 'your_password',
        database: 'project'
    }
    const db=mysql.createConnection(config);
    db.connect((err)=>{
        if(err)
        {
            console.log('There was an error');
        }
       
    })

return db;
}
}
module.exports=log;
