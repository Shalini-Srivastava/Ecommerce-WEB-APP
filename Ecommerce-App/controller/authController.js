import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";



export const registerController=async (req,res)=>{
    try{
    const {name,email,password,phone,address,answer}=req.body
    // validations
    if(!name){
       return res.send({message:"name is required"}) 
    }
    if(!email){
        return res.send({message:"email is required"})
     }
     if(!password){
        return res.send({message:"password is required"})
     }
     if(!phone){
        return res.send({message:"phone is required"})
     }
     if(!address){
        return res.send({error:"address is required"})
     }
     if(!answer){
        return res.send({error:"answer is required"})
     }
    //  check user 
    const existingUser=await userModel.findOne({email})
    // it should not be existing user
    if(existingUser){
        return res.status(200).send({
            success:false,
            message:"Already Register please login",
        })
    }
    // register user
    const hashedPassword=await hashPassword(password);
    // save
    const user =await new userModel({name,email,phone,address,password : hashedPassword,answer}).save()
    res.status(201).send({
        success:true,
        message:"User register successfully",
        user,
    })

    }catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in registration",
        error
    })
    };

};

//  LOGIN
export const loginController=async (req,res)=>{
    try{
        const {email,password}=req.body
        // validation
        if(!email || !password ){
            res.status(404).send({
                success:false,
                message:"invalid email or password",
         })
        }
        // check user
        const user =await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"email is not registered",
            })
        }
        const match =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password",
            })
        }
        // token =session
        const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn :"7d",
        }) ;
        res.status(200).send({
          success:true,
          message:"login successfully",
          user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            role:user.role,
          }  ,
          token,
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in login",
            error
        })  
    };
};

// forgotPasswordController
export const forgotPasswordController=async(req,res)=>{
    try{
        const[email,answer,newPassword]=req.body
        if(!email){
            res.status(400).send({message:"email is required"})
        }
        if(!answer){
            res.status(400).send({message:"answer is required"})
        }
        if(!newPassword){
            res.status(400).send({message:"newPassword is required"})
        }
        // check user
        const user =await userModel.findOne({email,answer});
        // Validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"wrong email or answer",
            });
        }
        // if user found encrypt the password and update in DB
        const hashed=await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        console.log(user._id);
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully",
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"something went wrong",
            error
        })  
    };
}

// test controller
export const testController= (req,res)=>{
 res.send(`protective route`)
}
