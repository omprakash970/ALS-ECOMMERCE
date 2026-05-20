import 'dotenv/config'; 
import express from 'express';
import { connectDB } from './db';
import cors from 'cors';
import morgan from 'morgan';


async function mainEntryFunction(){
  await connectDB(); 
  const app = express(); 

  const corsOrigins =(process.env.CORS_ORIGIN ||"http://localhost:3000")
  .split(',').map(origin=>origin.trim()).filter(Boolean); 
  

  app.use(
    cors({
      origin:corsOrigins, 
      credentials:true
    })
  )
  app.use(express.json());
  app.use(morgan('dev'));
 
}