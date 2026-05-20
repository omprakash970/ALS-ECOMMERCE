import mongoose from 'mongoose';
import mongodb from 'mongodb';

export async function connectDB(){
  await mongoose.connect(process.env.MONGODB_URI!)
  console.log('Connected to MongoDB');
}