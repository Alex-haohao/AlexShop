

var homehot = require("./data/home/hotdata")


var config = require("./config.js");
const router = require('koa-router')({prefix: '/api'});
var searchData  = require("./data/search")
var details = require('./data/detail')
var comment = require('./data/comment/comment')

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

    ctx.body = searchData
})

router.get('/details',async (ctx, next) =>{
    var id = ctx.query.id;
    console.log("id   :"+id)
    ctx.body =details
})


router.get('/comment',async (ctx, next) =>{
    var id = ctx.query.id;
    console.log("id   :"+id)
    ctx.body =comment
})






module.exports= router