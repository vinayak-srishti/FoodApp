import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Userlogin() {
const navigate=useNavigate()
  const[login,setlogin]=useState({
    Name:"",
    Password:""
  })


  const myfunc=(a)=>{
    setlogin({
      ...login,[a.target.name]:a.target.value
    })
    console.log(login);
  }

    const myfunc1=(b)=>{
      b.preventDefault()
      axios.post("http://localhost:3900/login",login)
      .then(result=>{
        console.log(result);
        console.log(result.status);
        if (result.data.status==200) {
            alert("login successfully")
            navigate("/userhome")
            localStorage.setItem("logid",result.data.data._id)
            console.log(result.data.data._id);
        }
        else {
            alert("Invalid Credentials")
        }
      })
      .catch(err=>{
        alert("User not found")
      })
    }
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>



    <div>

        <div class='form'>
        <form onSubmit={myfunc1}>

          <h3 id='chh'>CUSTOMER LOGIN HERE</h3>
          {/* <div id='usrnme'><h5 className="fw-bold" style={{color:"blue"}}>Username</h5></div> */}
          <input type='text' id='inp1'className="form-control" placeholder='Enter Your Username'  name='Name' value={login.Name} onChange={myfunc}/>
          {/* <div id='pswd'><h5 className="fw-bold">Password</h5></div> */}
          <input type='password' id='inp2' className="form-control" placeholder='Enter Your Password' name='Password' value={login.Password} onChange={myfunc}/>
        <div><button type='submit' id='btn1' className="btn btn-danger">Login</button></div>
        </form>

        </div>

        
    </div></div>
  )
}

export default Userlogin