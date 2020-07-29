const mysql = require("mysql");




async function sqlFn(sql,arr){
    var client = mysql.createConnection({
        host:"rm-bp1zn365zxe1kdg5ldo.mysql.rds.aliyuncs.com",
        port:3306,
        user:"xth6902716", 
        password:"Xth13907202753",
        database:"alexuser"
    })
    return new Promise((resolve, reject)=>{
        client.query(sql,arr, function(error,result){
            if(error){
                console.log(new Error(error));
            }
            else{
                client.end(function (err) {
                    if (err) {
                    }
                    console.log('[connection end] succeed!');
                });
                
                resolve (result)}
        })
    })  

    
}



module.exports = sqlFn