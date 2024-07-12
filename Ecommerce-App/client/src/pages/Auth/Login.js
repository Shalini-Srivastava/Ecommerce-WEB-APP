import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-hot-toast'
import axios from "axios";
import {  useNavigate,useLocation } from 'react-router-dom';
import { token } from 'morgan';
import {useAuth} from '../../Context/Auth';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [auth,setAuth] =useAuth();

    const navigate=useNavigate();
    const location=useLocation();
    // form function
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/login`,
                {email,password}
            );
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                setAuth({
                  ...auth,
                  user:res.data.user,
                  token:res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || '/');
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
        <h4 className="title">LOGIN HERE</h4>
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>(setPassword(e.target.value))}
              className="form-control"
              id="exampleInputPassword1"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </button>
          </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login