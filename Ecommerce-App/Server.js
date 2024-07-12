// const express=require('express');

import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./Config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js"

// configure env
dotenv.config();

// Database config
connectDB();

// rest object
const app=express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/category",categoryRoutes)

// rest api
app.get('/',(req,res)=>{
    res.send({
        message:'WELCOME TO ECOMERCE APP'
    }
    )
})
// PORT
const PORT=process.env.PORT || -8080;

// Run listen
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgRed.white);
});