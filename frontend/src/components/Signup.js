import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {
    const [cred, setcred] = useState({name:"",email:"",password:"",cpassword:""})
let navigate=useNavigate()


    const putcred = async (e) => {
        e.preventDefault();
        const {name,email,password}=cred;
        const response = await fetch("https://noteinfinitybackend.vercel.app/api/check/createuser", {
          method: "POST",
    
          headers: {
            "Content-Type": "application/json",
          },
    
          body: JSON.stringify({name,email,password}),
        });
        const json = await response.json();
        if(json.success){
    localStorage.setItem('token',json.jwtoken)
    props.showalert("Successfully created new user","success")
    navigate("/")
        }else{
          props.showalert("Invalid data","danger")
        }
      };
    const onChange=(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
    
    }

  return (
    <div className='container'>
      <form onSubmit={putcred}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label"> Name</label>
    <input type="text" className="form-control" id="name" name="name"  onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp"  onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" name="password" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="text" className="form-control" id="cpassword" name="cpassword" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
