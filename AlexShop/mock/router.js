

var homehot = require("./data/home/hotdata")


var config = require("./config.js");
const router = require('koa-router')({prefix: '/api'});
var searchData  = require("./data/search")
var details = require('./data/detail')
var comment = require('./data/comment/comment')
const sqlFn = require("./mysql/index")


router.get(config.homehot1,async (ctx, next) =>{
    var figureName = ctx.query.figure;
    console.log("Figure +  ",figureName)
    ctx.body = homehot.hot1
})

router.get(config.homehot2,async (ctx, next) =>{
    var figureName = ctx.query.figure;
    console.log("Figure +  ",figureName)
    ctx.body = homehot.hot2
})

router.get(config.swiper1,async (ctx, next) =>{
    ctx.body = homehot.swiper1
})

router.get('/search',async (ctx, next) =>{
    var figureName = ctx.query.figure;
    var searchContent = ctx.query.content;
    var page = ctx.query.page;

    console.log("Figure +  ",figureName)
    console.log("searchContent +  ",searchContent)
    console.log("page +  ",page)
    // searchData.data.map(item =>{
    //     if()
    // })

    ctx.body = searchData
})

router.get('/details',async (ctx, next) =>{
    var id = ctx.query.id;
    console.log("id   :"+id)
    
    details.data.map(item=>{
        if(item.id == id){
        ctx.body =item
        console.log(item.id)
        }
    })
    console.log('lalalala')

})


router.get('/comment',async (ctx, next) =>{
    var id = ctx.query.id;
    console.log("id   :"+id)
    ctx.body =comment
})

router.get('/checkshoppingcar',async (ctx, next) =>{
    var user = ctx.query.user;
    const sql = "select * from shoppingcard where `user` =?"
    const arr = [user];
    const result = await sqlFn(sql,arr);
    if(result.length>0){
        ctx.body = {success:true}
        ctx.body = result
        // console.log(JSON.stringify(result))
    }
    else{
        ctx.throw(400,JSON.stringify({error:"there is no this item"}));
    }
})

router.get('/deleteshoppingcar',async (ctx, next) =>{
    var user = ctx.query.user;
    var shopid = ctx.query.shopid;
    // console.log("user is: "+"  "+user+"   "+"shopid is : "+shopid)
    const sql = "delete from shoppingcard where `user` =? AND `itemid`=? "
    const arr = [user,shopid];
    const result = await sqlFn(sql,arr);
    if(result.affectedRows){
        ctx.body = {success:true}
        ctx.body = "already deleted"
    }
    else{
        ctx.throw(400,JSON.stringify({error:"fail to delete, may not have this item"}));
    }
})



router.post('/shopcar',async (ctx)=>{
    ctx.body=ctx.request.body;  

    const{user,shopid,figuretype,price,image} = ctx.body;
    // console.log("user is: "+"  "+user+"   "+"shopid is : "+shopid+"  figuretype:  "+figuretype
    // +"    price   +" +price+"   img   :"+ image )

    const sql = "select * from shoppingcard where `user` =? AND `itemid`=?"
    const arr = [user,shopid];

    const result = await sqlFn(sql,arr);

    if(result.length>0){
    
        ctx.throw(400,JSON.stringify({error:"already in your shopping car"}));
        
    }
    else{
       
        var insertsql = "insert into shoppingcard values (null,?,?,?,?,?)";
    var insertarr = [user,shopid,figuretype,price,image];
    const insertresult = await sqlFn(insertsql,insertarr);
    if(insertresult.affectedRows){
        ctx.body = {success:true}
    }
    else{
      ctx.throw(400,JSON.stringify({error:"add shopping car fail"}));
    }
    }


})






module.exports= router