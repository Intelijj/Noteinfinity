import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

const [cred, setcred] = useState({email:"",password:""})
let navigate=useNavigate()

  const putcred = async (e) => {
    e.preventDefault();
    const response = await fetch("https://noteinfinitybackend.vercel.app/api/check/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({email:cred.email,password:cred.password }),
    });
    const json = await response.json();
    if(json.success){
localStorage.setItem('token',json.jwtoken)
props.showalert("  : Successfully logged in","success")
navigate("/")
    }else{
        props.showalert("  : Invalid data","danger")
    }
  };
const onChange=(e)=>{
    setcred({...cred,[e.target.name]:e.target.value})

}


  return (
    <div>
      <form onSubmit={putcred}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={onChange}
            value={cred.email}
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            name="password"
            onChange={onChange}
            id="password"
            value={cred.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
