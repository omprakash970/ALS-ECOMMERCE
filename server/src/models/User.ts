import mongoose from 'mongoose'; 
export type UserRole = 'admin' | 'user';
const addressSchema = new mongoose.Schema({
  fullName:{
    type:String, 
    required:true, 
    trim:true
  }, 
  address:{
    type:String, 
    required:true, 
    time: true
  },
  state:{
    type:String, 
    required:true, 
    trim:true
  }, 
  postalCode:{
    type:String,
    required:true,
    trim:true
  },
  isDefault:{
    type:Boolean,
    default:false, 

  }, 

}, {
  timestamps:false
})

const UserSchema = new mongoose.Schema({
  clerkUserId:{
    type:String, 
    required:true,
    unique:true, 
    index:true
  }, 
  name:{
    type:String, 
    required:false, 
  },
  role:{
    type:String, 
    enum:['admin', 'user'],
    default:'user'
  }, 
  points:{
    type:Number,
    default:0,
    min:0
  }, 
  addresses:{
    type:[addressSchema],
    default:[]
  }
}, {
  timestamps:true
})
export const User = mongoose.model('User', UserSchema);