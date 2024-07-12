import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-hot-toast'
import axios from "axios";
import {  useNavigate } from 'react-router-dom';


const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const[answer,setAnswer]=useState("");
    const navigate=useNavigate();

    // form function
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`,
                {name,email,password,phone,address,answer}
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
        <h4 className="title">Register Here</h4>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>(setName(e.target.value))}
              className="form-control"
              id="exampleInputPassword1"
              required
              autoFocus
            />
          </div>
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
            <input
              type="text"
              placeholder="Enter the Phone number"
              value={phone}
              onChange={(e)=>(setPhone(e.target.value))}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e)=>(setAddress(e.target.value))}
              className="form-control"
              id="exampleInputPassword1"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="What is your favourite sport?"
              value={answer}
              onChange={(e)=>(setAnswer(e.target.value))}
              className="form-control"
              id="exampleInputPassword1"
              required
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register