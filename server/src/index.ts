import 'dotenv/config';

import dns from "dns";

dns.setServers([
  '1.1.1.1', 
  '8.8.8.8'
])


import express from 'express';


import { connectDB } from './db';
import cors from 'cors';
import morgan from 'morgan';
import { ok } from './utils/envelope';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorhandler';



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

  app.get('/api/health', (req, res)=>{
    
    res.status(200).json(ok({ message: 'Server is healthy' }));
  })
 app.use(notFound); 
 app.use(errorHandler); 
 const port = Number(process.env.PORT) || 5000;

 app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`); 
 })
}
mainEntryFunction().catch((err)=>{
  console.error("Failed to start server", err);
  process.exit(1);
})