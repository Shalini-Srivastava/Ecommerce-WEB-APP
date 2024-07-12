import JWT, { decode } from "jsonwebtoken";
import userModel from "../models/userModel.js";

// protected routes taken base
export const requireSignIn =async(req,res,next)=>{
    try{
    const decode=JWT.verify(
    req.headers.authorization, // since token is present in header on postman
    process.env.JWT_SECRET
    );
    req.user=decode
    next();
    }catch(error){
        console.log(error)
    }
}
// Admin access
export const isAdmin =async(req,res,next)=>{
    try{
    const user=await userModel.findById(req.user._id);
    if(user.role!==1){
        return res.status(401).send({
            success: false,
            message:"unauthorized Access",
        });
    }else{
    next();
    }
    }catch(error){
        console.log(error)
    }
};