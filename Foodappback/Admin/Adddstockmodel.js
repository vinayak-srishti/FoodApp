const mongoose=require("mongoose")
const addstockschema=new mongoose.Schema({
    Foodname:{type:String},
    Resturantname:{type:String},
    Quantity:{type:Number},
    Price:{type:Number},
    Details:{type:String},
    img:{type:String}
    
})

module.exports=new mongoose.model("addstock",addstockschema)