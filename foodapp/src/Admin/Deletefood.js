import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Deletefood() {
    const[viewfood,setviewfood]=useState([])

    useEffect(()=>{
        axios.post(`http://localhost:3900/viewfood`)
        .then((result)=>{
            console.log(result);
            setviewfood(result.data.msg)
            console.log(result.data.msg);
        })
        .catch((err)=>{
            alert("error")
            console.log(err);
        })
    },[])


    const deletefn=((_id)=>{
        {
            console.log(_id);
            axios.post(`http://localhost:3900/deletefood/${_id}`)
            .then(result=>{
                console.log(result);
                alert("Food Deleted Successfully")
                window.location.reload(false);
            })
            .catch(err=>{
                console.log(err);
                alert("error")
            })
        }
    })


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






<div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
    //   height: '100vh' 
    }}>

        <div id='adminvc2'>
        <div>
            <tr>
                <th id='cn1'>Food Name</th>
                <th id='cn1'>Resturant Name</th>
                <th id='cn1'>Food Price</th>
                <th id='cn1'>Details</th>
                <th id='cn1'>   </th>
                <th id='cn1'>   </th>
                <th id='cn1'>   </th>

            </tr>
            {
                viewfood.map((details)=>{
return(
               
            <tr>
                <td id='cn2'>{details.Foodname}</td>
                <td id='cn2'>{details.Resturantname}</td>
                <td id='cn2'>{details.Price}</td>
                <td id='cn2'>{details.Details}</td>
                <td id='cn2'></td>
                <td id='cn2'><button type='button' onClick={()=>{deletefn(details._id)}} className="btn btn-danger">Delete</button></td>
                <td id='cn2'><Link to={`/update/${details._id}`}><button type='button' className="btn btn-danger">Update</button></Link></td>

            </tr>
 )
             })
            } 
        </div>
    </div>
    </div>
    </div>
  )
}

export default Deletefood