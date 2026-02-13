import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
},{minimize:false})//if not false it will not createe crat data with default value

const userModel=mongoose.models.user || mongoose.model("user",userSchema);
const foodSchema= new mongoose.Schema({
    name :{type :String, required:true},
    description :{type :String, required:true},
    price :{type :Number, required:true},
    image :{type :String, required:true},
    category :{type :String, required:true}
})
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)
const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)

export { userModel, foodModel, orderModel };