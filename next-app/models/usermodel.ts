import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    isVarified:{
    type:Boolean,
    default:false
},
isAdmin:{
    type:Boolean,
    default:false
},
forgotPasswordToken:String,
forgotPasswordTokenExpairy:Date,
verifyTokenExpiry:Date
})
const user=mongoose.models.users||mongoose.model("Users",UserSchema)
export default user