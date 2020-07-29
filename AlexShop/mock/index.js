// var express = require("express");
// var app = express();
// var router = require("./router.js");

// app.use("/api",router);

// app.listen(3002,function(){
//     console.log(3002);
// })

var Koa=require('koa');
// var router = require('koa-router')();
const bodyParser = require('koa-bodyparser')

const routers = require("./router")
const authRouter = require("./routers/auth")
const usersRouter = require("./routers/users")


var app=new Koa();


app.use(bodyParser());

app.use(routers.routes());
app.use(routers.allowedMethods());
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());



app.listen(3002);   