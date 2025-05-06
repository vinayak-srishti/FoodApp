const mongoose=require("mongoose")
const orderschema=new mongoose.Schema({
    stockid:{type:mongoose.Schema.Types.ObjectId,
    ref:'addstock'},
    userid:{type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
    Quantity:{type:Number},
    Finalprice:{type:Number},
    Paymenttype:{type:String},
    Credno:{type:Number},
    Finaddress:{type:String}
})
module.exports=new mongoose.model("order",orderschema)