import express from 'express'; //with the help of express we will create route
import {registerController,loginController,testController,forgotPasswordController} from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// if we do routing in separate file then we require router object
// router object
const router=express.Router()

//routing
// REGISTER || Method POST
router.post('/register',registerController)

//  LOGIN || Method POST
router.post('/login',loginController)

// Forgot password
router.post('/forgot-password',forgotPasswordController)

// Test routes
router.get('/test',requireSignIn,isAdmin,testController)

// protected route for user
router.get('/user-auth',requireSignIn, (req,res) =>{
    res.status(200).send({ok:true});
})

// protected route for admin
router.get('/admin-auth',requireSignIn,isAdmin, (req,res) =>{
    res.status(200).send({ok:true});
})

export default router;
