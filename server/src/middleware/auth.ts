import {Request, Response, NextFunction} from 'express';
import {getAuth} from '@clerk/express'; 
import { AppError } from '../utils/AppError';
import { User } from '../models/User';

export function requireAuth(req:Request, _res:Response, next:NextFunction){

  const{userId} = getAuth(req); 
  if(!userId){
    return next(new AppError('Unauthorized', 401));
  }
  next(); 
}

export async function getDbUserFromReq(req:Request){
  const {userId} = getAuth(req);
  if(!userId){
    throw new AppError('Unauthorized', 401);
  }
  const dbUser = await User.findOne({clerkUserId:userId});
  if(!dbUser){
    throw new AppError('User not found', 404);
  }
  return dbUser; 
}

