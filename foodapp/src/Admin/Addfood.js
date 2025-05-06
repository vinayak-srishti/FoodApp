import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Addfood() {
    const[addfood,setaddfood]=useState({
        Foodname:"",
        Resturantname:"",
        Quantity:"",
        Price:"",
        Details:"",
        img:null
    })

    const myfunc=(a)=>{
        if (a.target.name=="img") {
            setaddfood({...addfood,img: a.target.files[0]})
        }else{
            setaddfood({...addfood,[a.target.name]:a.target.value})
        }
    //     setaddfood({
    //         ...addfood,[a.target.name]:a.target.value
    //     })
    //     console.log(addfood);
    // }
    // const imgfunc=(a)=>{
    //     setaddfood({
    //         ...setaddfood,img: a.target.files[0]
    //     })
    }
        const myfunc2=(b)=>{
            console.log("submitted",addfood);
            b.preventDefault()
            if (addfood.Foodname.length==0) {
                alert("Please Enter Name")
                return
            }
            if (addfood.Resturantname.length==0) {
                alert("Please Enter ResturantName")
                return
            }
            if (addfood.Quantity.length==0) {
                alert("Please Enter Quantity")
                return
            }
            if (addfood.Price.length==0) {
                alert("Please Enter Price")
                return
            }
            if (addfood.Details.length==0) {
                alert("Please Enter Details")
                return
            }
            axios.post(`http://localhost:3900/addstock`,addfood,{headers:{"Content-Type" :"multipart/form-data"}})
            .then(result=>{
                console.log(result);
                alert("Added Successfully")
                window.location.reload(false);

            })
            .catch(err=>{
                console.log(err);
                alert("error")
            })

        }
      



  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                <div class="container-fluid"  >
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <Link to='/adminhome' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to='/addfood'><a class="nav-link active" aria-current="page" href="#">Add Food</a></Link>
                            </li> */}
                            <li class="nav-item">
                                <Link to='/admincustview' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">View Customers</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/deletefood' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">Update Food</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/viewusersadmin' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">View All Orders</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/admin' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">Logout</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>









<div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
        <form onSubmit={myfunc2}>

        <div id='addfd1'>
            
            <div id='addfd2'><h3>Add Food</h3></div>
            <input type='text' placeholder='Enter food Name' id='addfd3' name='Foodname' value={addfood.Foodname} onChange={myfunc}/>
            <input type='text' placeholder='Enter Reaturant name' id='addfd3' name='Resturantname' value={addfood.Resturantname} onChange={myfunc}/>
            <input type='text' placeholder='Enter quantity' id='addfd3' name='Quantity' value={addfood.Quantity} onChange={myfunc}/>
            <input type='text' placeholder='Enter price' id='addfd3' name='Price' value={addfood.Price} onChange={myfunc}/>
            <input type='text' placeholder='Enter details' id='addfd3' name='Details' value={addfood.Details} onChange={myfunc}/>
            <input type="file" id='addfd4' name='img' onChange={myfunc}></input>
            <button type='submit' className="btn btn-danger" id='addfd5'>Add Food</button>

        </div>        </form>
        </div>

    </div>
  )
}

export default Addfood