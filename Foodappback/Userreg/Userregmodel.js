const mongoose=require("mongoose")
const signinschema=new mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Address:{type:String},
    Number:{type:Number},
    Password:{type:String},
    img:{type:String}
})
module.exports=new mongoose.model("user",signinschema)