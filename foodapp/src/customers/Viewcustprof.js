import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import img from '../Images/OIP.jpeg'

function Viewcustprof() {
   
const[viewcust,setviewcust]=useState({})
const[usrid,setusrid]=useState({
  userid:localStorage.getItem("logid")
})

    useEffect(()=>{
        const id=localStorage.getItem("logid")
        console.log(id);
        axios.post(`http://localhost:3900/viewcustone/${id}`)
        .then((response)=>{
            setviewcust(response.data.msg)
            console.log(response.data.msg);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


   const updatefn=(a)=>{
      a.preventDefault();
      const id=localStorage.getItem("logid")
      console.log(id);
      axios.post(`http://localhost:3900/updatecust/${id}`,viewcust)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
            alert("Successfully Updated")
            
        }
        else{
            alert("Updation failed")
        }
    })
    }
    const changfn=(e)=>{
      setviewcust({...viewcust,[e.target.name]:e.target.value})
    }
  return (
    <div>
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                    <div class="container-fluid"  >
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link to='/userhome' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">Home page</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={`/vieworderbycust/${usrid.userid}`} style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">View My Orders</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/custprof' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">View My Profile</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/home' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">Logout</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
 */}





                 <section class="vh-100" style={{backgroundColor:"#f4f5f7;"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{borderTopLeftRadius:" .5rem;", borderBottomLeftRadius: ".5rem;"}}
                  >
                    <img
                      src={`http://localhost:3900/${viewcust.img}`}
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{width: "80px;"}}
                    />
                   <h5 style={{color: "black",fontFamily:'cursive',fontWeight:'700'}}></h5> 
                  
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6 style={{color: "violet",fontFamily:'cursive',fontWeight:'700'}} onChange={changfn}>Hello {viewcust.Name} </h6>
                      <hr class="mt-0 mb-4" />
                      <div class="col-6 mb-3">
                          <h6>Name</h6>
                          {/* <p class="text-muted" onChange={changfn}>{viewcust.Name}</p> */}
                          <input type='text' name='Name' value={viewcust.Name} onChange={changfn} className="inp1"/>
                        </div>
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          {/* <p class="text-muted" onChange={changfn}>{viewcust.Email}</p> */}
                          <input type='text' name='Email' value={viewcust.Email} onChange={changfn} className="inp1"/>

                        </div>
                        <div class="col-6 mb-3">
                          <h6>Contact</h6>
                          {/* <p class="text-muted" onChange={changfn}>{viewcust.Number}</p> */}
                          <input type='text' name='Number' value={viewcust.Number} onChange={changfn} className="inp2"/>

                        </div>
                      </div>
                 
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Address</h6>
                          {/* <p class="text-muted" onChange={changfn}>{viewcust.Address}</p> */}
                          <input type='text' name='Address' value={viewcust.Address} onChange={changfn} className="inp1" />

                        </div>
                        
                        <div class="col-6 mb-3">
                          {/* <h6>Password</h6> */}
                          {/* <p class="text-muted" onChange={changfn}>{viewcust.Password}</p> */}
                          {/* <input type='text' name='Password' value={viewcust.Password} onChange={changfn} className="inp2"/> */}

                        </div>
                      </div>
                     
                   <button type='submit' class='btn btn-danger h-23 w-100 py-2' onClick={updatefn}>Edit</button>
                
                    </div>
                  </div>
                      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Viewcustprof