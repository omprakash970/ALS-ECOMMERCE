import 'dotenv/config'; 
import express from 'express';
import { connectDB } from './db';

async function mainEntryFunction(){
  await connectDB(); 
  const app = express(); 
  
}