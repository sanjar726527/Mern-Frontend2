import React, { useState } from "react";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const SignUp = () => {
  const [data, setData] = useState([]);
  const [valueNum, setValue] = useState();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, number: valueNum });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/user/signup", { ...data }).then((res) => {
      console.log(res.headers.get("x-auth-token"));
    });
  };

  return (
    <div className="signup">
      <div className="w-25 m-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>
          <div className="form-group my-3">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={data.name || ""}
              onChange={handleChange}
              id="exampleInputName"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email || ""}
              onChange={handleChange}
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label htmlFor="exampleInputEmail1">Phone number</label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="UZ"
              value={valueNum}
              onChange={setValue}
            />
          </div>

          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password || ""}
              onChange={handleChange}
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
