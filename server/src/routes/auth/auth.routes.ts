import { Router, type Request, type Response } from 'express'; 
import { requireAuth } from '../../middleware/auth';
import { asyncHandler } from '../../utils/asyncHandler';
import { getAuth, clerkClient } from '@clerk/express';
import { AppError } from '../../utils/AppError';
import { User } from '../../models/User';
import { ok } from '../../utils/envelope';
export const authRouter = Router(); 

authRouter.post('/sync', requireAuth,
  asyncHandler(async(req, res)=>{
    const {userId} = getAuth(req); 
    if(!userId){
      throw new AppError("user not logged In ", 401);
    }
    const clerkUser=await clerkClient.users.getUser(userId); 
    const extractUserEmailInfo= clerkUser.emailAddresses.find((item)=>item.id===clerkUser.primaryEmailAddressId)||clerkUser.emailAddresses[0];

    const fullName = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ').trim(); 

    const name  = fullName||clerkUser.username; 
     
    const raw = process.env.ADMIN_EMAILS
    const adminEmails = new Set(
      raw?.split(",").map(email=>email.trim().toLowerCase()).filter(Boolean)
    )

    //if the current user is existing user or not 
    //update/do nothing 
    //create the user and save in our db  with role 
    const existingUser = await User.findOne({clerkUserId: userId });
    const email = extractUserEmailInfo?.emailAddress || (extractUserEmailInfo as any)?.email || clerkUser.emailAddresses[0]?.emailAddress;
    const shouldBeAdmin = email ? adminEmails.has(email.toLowerCase()) : false;

    const nextRole = existingUser?.role==='admin' ?'admin':shouldBeAdmin?'admin':existingUser?.role ||'user'; 

    const newCreateddbUser = await User.findOneAndUpdate(
      {
        clerkUserId:userId
      }, 
      {
        clerkUserId:userId,
        email, 
        name, 
        role:nextRole
      }, 
      {
        new:true, 
        upsert:true,
        setDefaultsOnInsert:true
      }
    )
    res.status(200).json(ok({
      user:{
        id: (newCreateddbUser )._id,
        clerkUserId: (newCreateddbUser ).clerkUserId,
        email: (newCreateddbUser ).email,
        name: (newCreateddbUser ).name,
        role: (newCreateddbUser).role
      }
    }))
  }),


);
