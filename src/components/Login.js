import { useState,useEffect } from "react";
import axios from 'axios'
const Login = () => {
   const[data,setData] = useState([])
   
   
    
   const handleChange = (e)=>{
       setData({...data, [e.target.name]:e.target.value})
   }
    

   const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
   
   }


  return (
    <div className="login">
      <div className="w-25 m-auto">
        <form  onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>

          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"   
              value={data.email || ''}
              onChange={handleChange}
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password || ''}
              onChange={handleChange}
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
