let a=require('express')
const order=require('./Ordermodel')
const mongoose=require('mongoose')
const res = require('express/lib/response')

const orders=((req,res)=>{
    let order1=new order({
        stockid:req.body.stockid,
        userid:req.body.userid,
        Quantity:req.body.Quantity,
        Finalprice:req.body.Finalprice,
        Paymenttype:req.body.Paymenttype,
        Credno:req.body.Credno,
        Finaddress:req.body.Finaddress
    })
    order1.save()
    .then(response=>{
        console.log(response);
        res.json({
            msg:"saved"
        })
    })
    .catch(err=>{
        res.json({
            msg:"error"
        })
    })
})

const vieworderforuser=((req,res)=>{
    order.find({userid:(req.params.id)}).populate('stockid').exec()
    .then(response=>{
        res.json({
            msg:response
        })
    })
    .catch(err=>{
        res.json({
            msg:"err"
        })
    })
})
const deleteorder=((req,res)=>{
    order.findByIdAndDelete({_id:(req.params._id)})
    .then(response=>{
        res.json({
            msg:response
        })
    })
    .catch((err)=>{
        res.json({
            msg:"err"
        })
    })
})

const viewallorder=(req,res)=>{
    order.find()
    .populate("stockid")
    .populate("userid")
    .exec()
    .then((data)=>{
        res.json({
            status:200,
            msg:"data obtained",
            data:data
        });
    })
    .catch((err)=>{
        res.json({
            status: 500,
            msg: "No Data obtained",
            Error: err,
        });
    });
}


module.exports={orders,vieworderforuser,deleteorder,viewallorder}