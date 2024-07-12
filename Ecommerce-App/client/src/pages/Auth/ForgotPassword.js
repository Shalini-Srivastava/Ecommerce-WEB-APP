import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-hot-toast'
import axios from "axios";
import {  useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const[email,setEmail]=useState("");
    const[newPassword,setnewPassword]=useState("");
    const[answer,setAnswer]=useState("");

    const navigate=useNavigate();
   
    // form function
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
                {email,newPassword,answer}
            );
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate('/login');
            }else{
                toast.error(res.data.message);
            }
        }catch(error){
            console.log(error);
            toast.error("Something went wrong");
        }
    }
  return (
    <Layout title="Register">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h4 className="title">RESET PASSWORD</h4>
          <div className="mb-3">
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your Email adress"
              value={email}
              onChange={(e)=>(setEmail(e.target.value))}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e)=>(setnewPassword(e.target.value))}
              className="form-control"
              id="exampleInputPassword1"
              required
              autoFocus
            />
          </div>
          <input
              type="text"
              placeholder="Enter your favourite sport"
              value={answer}
              onChange={(e)=>(setAnswer(e.target.value))}
              className="form-control"
              id="favouriteSports"
              aria-describedby="emailHelp"
              required
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ForgotPassword