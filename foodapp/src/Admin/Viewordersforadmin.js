import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function Viewordersforadmin() {
    let id = useParams()


const[orderview,setorderview]=useState([])

useEffect(()=>{

    axios.post(`http://localhost:3900/viewallorder`)
    .then((result)=>{
        console.log(result);
        setorderview(result.data.data)
        console.log(result.data.data);
    })
    .catch((err)=>{
        alert("err")
        console.log(err);
    })
},[])

// const dltfn=((_id)=>{
//     axios.post(`http://localhost:3900/deleteorder/${_id}`)
//     .then((result)=>{
//         console.log(result);
//         alert("Order Deleted Successfully")
//     })
//     .catch((err)=>{
//         alert("Error")
//     })
// })
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
                            <li class="nav-item">
                                <Link to='/addfood' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">Add Food</a></Link>
                            </li>
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

    <div id='vord1'>
        <tr>
            <th id='vord2'>Customer Name</th>
            <th id='vord2'>Order Address</th>
            <th id='vord2'>Food Name</th>
            <th id='vord2'>Resturant Name</th>
            <th id='vord2'>Quantity</th>
            <th id='vord2'>Finalprice</th>
            <th id='vord2'>Payment Type</th>
            <th>  </th>
        </tr>
        {orderview.length ?(
            orderview.map((details)=>{
                return (


        <tr id='plord3'>
             <td id='tble'>{details.userid.Name}</td>
             <td id='tble'>{details.Finaddress}</td>
             <td id='tble'>{details.stockid.Foodname}</td>
            <td id='tble'>{details.stockid.Resturantname}</td>
            <td id='tble'>{details.Quantity}</td>
             <td id='tble'>{details.Finalprice}</td>
             <td id='tble'>{details.Paymenttype}</td>
         </tr>
          );
        },[])
        ):(
            <div><h5>No Data available</h5></div>
     )}
    </div>




    </div>
  )
}

export default Viewordersforadmin