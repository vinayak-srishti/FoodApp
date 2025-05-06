const a=require('express')
const stock=require('./Adddstockmodel')
const mongoose=require ('mongoose')
const multer=require('multer')
const res = require('express/lib/response')
const { response } = require('express')

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage}).single('img')

const addstock=(req,res)=>{
    let img=req.file.filename;
    console.log("file",req.body);
  let stock1=new stock({
    Foodname:req.body.Foodname,
    Resturantname:req.body.Resturantname,
    Quantity:req.body.Quantity,
    Price:req.body.Price,
    Details:req.body.Details,
    img:img
  }) 
  stock1.save()
  .then(data=>{
    res.json({
        msg:"saved",
        data:data
    })
  }) 
  .catch(err=>{
    console.log(err);
    res.json({
        msg:"error"
    })
  })
}
const viewfood=((req,res)=>{
    stock.find({})
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
const viewone=((req,res)=>{ 
    stock.findOne({_id:(req.params._id)})
    .then(response=>{
        res.json({
            msg:response
        })
    })
    .catch(error=>{
        res.json({
            msg:"err"
        })
    })

})
const deletefood=((req,res)=>{
    stock.findByIdAndDelete({_id:(req.params._id)})
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
const updatefood=((req,res)=>{
    // console.log(req.body);
    stock.findByIdAndUpdate({_id:req.params._id},
    {
        Foodname:req.body.Foodname,
        Resturantname:req.body.Resturantname,
        Quantity:req.body.Quantity,
        Price:req.body.Price,
        Details:req.body.Details,
        // img:req.file
    })
    .exec()
    .then(response=>{
        res.json({
            status:200,
            msg:response,
            // msg:"updated successfully"
        })
    })
    .catch(error=>{
        res.json({
            msg:"err"
        })
    })
})


module.exports={addstock,upload,viewfood,viewone,deletefood,updatefood}