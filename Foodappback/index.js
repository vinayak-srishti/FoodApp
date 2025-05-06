const express=require('express')
const app=express()
const core=require('cors')
app.use(core())
const bodyparser=require("body-parser")
app.use(bodyparser.json())

app.use(express.static(`${__dirname}/uploads`));
app.use(bodyparser.urlencoded({ extended: true }))

const routreq=require('./router')
app.use('/',routreq)
const database=require("./database")
app.listen(3900,function(){
    console.log("server running");
})

