const x=require("express") 
const Login=require('./Userregmodel')
const mongoose =require("mongoose")
const multer=require('multer')
const res = require('express/lib/response')
const { response } = require("express")

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage}).single('img')
const register=((req,res)=>{
    let img=req.file.filename;
    let reg= new Login({
        Name:req.body.Name,
        Email:req.body.Email,
        Address:req.body.Address,
        Number:req.body.Number,
        Password:req.body.Password,
        img:img
    })
    reg.save()
    .then(response=>{
        res.json({
            msg:"saved"
        })

    })
    .catch(err=>{
        res.json({
            msg:"err"
        })
    })
})
const login=(req,res)=>{
    const Name=req.body.Name
    const Password=req.body.Password
    Login.findOne({Name:Name})
    .exec()
    .then(data=>{
        if (Password==data.Password) {
            res.json({
                status:200,
                msg:"login successfully",
                data:data

            })
        }
        else{
            res.json({
                status:500,
                msg:"password error"
            })
        }
    })
    .catch(err=>{
        res.json({
            msg:"user not fount"
        })
    })
}
const viewcust=((req,res)=>{
    Login.find({})
    .then(response=>{
        res.json({
            msg:response
        })
    })
    .catch(error=>{
        res.json({
            msg:'err'
        })
    })
})

const viewcustone=((req,res)=>{
    Login.findOne({_id:(req.params._id)})
    .then(response=>{
        res.json({
            msg:response
        })
    })
    .catch(error=>{
        res.json({
            msg:"error"
        })
    })
})
const deletecust=((req,res)=>{
    Login.findByIdAndDelete({_id:(req.params._id)})
    .then(response=>{
        res.json({
            msg:response
        })
    })
    .catch(error=>{
        res.json({
            msg:"error"
        })
    })
})
const updatecust=((req,res)=>{
    Login.findByIdAndUpdate({_id:req.params._id},
    {
        Name:req.body.Name,
        Email:req.body.Email,
        Address:req.body.Address,
        Number:req.body.Number,
        Password:req.body.Password

    })
    .exec()
    .then(response=>{
        res.json({
            status:200,
            msg:response
        })
    })
    .catch(error=>{
        res.json({
            msg:"error"
        })
    })
})
module.exports={register,upload,login,viewcust,deletecust,viewcustone,updatecust}