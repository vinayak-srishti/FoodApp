import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

function Update() {
    let id=useParams()
    const[viewprdt,setviewprdt]=useState({})

    
    useEffect(()=>{
        console.log("id",id.id);

        axios.post(`http://localhost:3900/viewone/${id.id}`)
        .then(result=>{
            console.log(result);
            setviewprdt(result.data.msg)
            console.log(result.data.msg);
        })
        .catch(err=>{
           alert("error")
            console.log(err);
        })
    },[])
const navigate=useNavigate()
    const updatefn=((e)=>{
        e.preventDefault()
        axios.post(`http://localhost:3900/updatefood/${id.id}`,viewprdt)
        .then((response)=>{
            console.log(response);
            if (response.data.status==200) {
                alert("Successfully Updated")
                navigate('/deletefood')
            }
            else{
                alert("Updation failed")
            }
        })
        .catch((err)=>{
            alert("err")
            console.log(err);
        })
        
    })
    const changefn=((a)=>{
        setviewprdt({...viewprdt,[a.target.name]:a.target.value})
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





<form onSubmit={updatefn}>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
    //   height: '100vh' 
    }}>
    <div id='updt1'>
        <div><h2 id='updt2'>Update Product</h2></div>
        <div id='ul1'>
            <tr id='ul2'>
                <td>Food Name : </td>
                <td><input type='text' id='inp1' name='Foodname' value={viewprdt.Foodname} onChange={changefn}></input></td>
            </tr>
            <tr>
                <td>Resturant Name : </td>
                <td><input type='text' id='inp2'name='Resturantname' value={viewprdt.Resturantname} onChange={changefn}></input></td>
            </tr>
            <tr>
                <td>Quantity : </td>
                <td><input type='text' id='inp2'name='Quantity' value={viewprdt.Quantity} onChange={changefn}></input></td>
            </tr>
            <tr>
                <td>Price : </td>
                <td><input type='text' id='inp2' name='Price' value={viewprdt.Price} onChange={changefn}></input></td>
            </tr>
            <tr>
                <td>Other Details : </td>
                <td><input type='text' id='inp3' name='Details' value={viewprdt.Details} onChange={changefn}></input></td>
            </tr>
            
                <button type='submit' className="btn btn-danger" id='btn33'>Update</button>
            
        </div>
        </div>
    </div></form>

    </div>
  )
}

export default Update