import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function Userproductview() {
  let id = useParams()
  const [usrid, setusrid] = useState({
    userid: localStorage.getItem("logid")

  })

  const [count, setCount] = useState(1)
  const [finprice, setfinprice] = useState("")


  const [foodadd, setfoodadd] = useState({})

  const [placeorder, setplaceorder] = useState({
    stockid: id.id,
    userid: localStorage.getItem('logid'),
    Quantity: '',
    Paymenttype: '',
    Credno:'',
    Finaddress:'',
  });
const navigate=useNavigate()

  //Increment decrement function for quantity
  const IncrementItem = () => {
    setCount(count + 1)
    setplaceorder({ ...placeorder, Quantity: count })

  }
  const DecrementItem = () => {
    setCount(count - 1)
    setplaceorder({ ...placeorder, Quantity: count })

    if (count <= 1) {
      alert("no product")
      return;
    }
    setCount(count - 1);
    
  }

  //set price according to count

  useEffect(() => {
    if (count >= 1) {
      setfinprice(parseInt(foodadd.Price) * parseInt(count))
    }
    else if (count == 1) {
      setfinprice(parseInt(foodadd.price))
    }
    else {
      setfinprice(parseInt(foodadd.price))
    }
  }, [foodadd.Price, count])
  

  const orderfn = ((a) => {
    console.log("working state");
    setplaceorder({ ...placeorder, [a.target.name]: a.target.value,Finalprice: finprice,Quantity:count })
    console.log("place", placeorder);
  })


  useEffect(() => {
    axios.post(`http://localhost:3900/viewone/${id.id}`)
      .then(result => {
        setfoodadd(result.data.msg)
        console.log(result.data.msg);
        console.log(result);
      })
      .catch(err => {
        alert("error")
        console.log(err);
      })

  }, [])

  const subfn = (a) => {
    a.preventDefault()
    console.log("order", placeorder);
    axios.post(`http://localhost:3900/orders`, placeorder)
      .then(result => {
        console.log(result);
        if (result.request.status == 200) {
          alert("Order succesfully added")
          navigate("/userhome")
          // window.location.reload(false);

        }
        else {
          alert("error")
        }
      })
      .catch(err => {
        console.log(err);
        alert("error")
      })
  }

  // console.log(id.id);



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
                <Link to='/userhome' style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">Home page</a></Link>
              </li>
              <li class="nav-item">
                <Link to={`/vieworderbycust/${usrid.userid}`} style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">View My Orders</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/home' style={{ textDecoration: 'none' }}><a class="nav-link active" aria-current="page" href="#">Logout</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}






      <form onSubmit={subfn}>

        <div id='prdt1'>
          <div><h2 id='prdt2'>ORDER  NOW</h2></div>
          <div><img src={`http://localhost:3900/${foodadd.img}`} alt='images' id='imgpdtv'></img></div>
          <div id='prdt3'><h4>{foodadd.Foodname}</h4></div>
          <div id='prdt4'><h6>{foodadd.Resturantname}</h6></div>
          {/* <div id='prdt4'><h6 >₹{parseInt(finprice)}</h6></div> */}
          <div id='prdt4'>₹<input type='number' value={finprice} name='Finalprice' onChange={orderfn} id='inpfin' /></div>
          <div id='prdt4'><h6>{foodadd.Details}</h6></div>

          <div id='dd' >
            <tr >
              <td>Count : </td>
              <td  ><button type='button' onClick={DecrementItem}>-</button></td>
              <td><input type='number' name="Quantity" value={count} onChange={orderfn}
                // ,price:a.target.value*foodadd.price
                id='orde6'></input></td>
              <td><button type='button' onClick={IncrementItem}>+</button></td>
            </tr>
          </div>
          <div>
            <tr>
              <td><div id='orde7'>Payment Type : </div></td>
              <td><div id='orde10'>
                <input type='radio' name='Paymenttype' value="Creditcard" onChange={orderfn} />CreditCard
                <input type='radio' name='Paymenttype' value="Cash On Delivery" onChange={orderfn} />CashOnDelivery
              </div></td>
            </tr>
          </div>


{placeorder.Paymenttype === 'Creditcard' &&(

<div>
        <div><tr>
          <td><label>Card Number:</label></td>
          <td><input type='number' id='fld1' name='Credno' placeholder="Enter your card number" value={placeorder.Credno} onChange={orderfn}/></td></tr>
        </div>
        <div><tr>
          
        <td><label>Order Address:</label></td>
          <td><textarea rows="2" cols="25" id='fld' name='Finaddress' value={placeorder.Finaddress} onChange={orderfn}/></td></tr>

        </div>
        </div>
          )}
{placeorder.Paymenttype ==='Cash On Delivery' &&(
  <div>
    <div><tr>
          
          <td><label>Order Address:</label></td>
            <td><textarea rows="2" cols="25" id='fld' name='Finaddress' value={placeorder.Finaddress} onChange={orderfn}/></td></tr>
  
          </div>
    </div>
)}
          <button type='submit' id='ordbtn' class="btn btn-success" >Place Order</button>
        </div>
      </form>

    </div>
  )
}

export default Userproductview