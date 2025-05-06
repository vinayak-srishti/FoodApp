// import React from 'react'
// // import img from "./"

// function Exqmple1() {
//   return (
// //     <div>
// //         <form class="row g-3">

// //         <div class="col-md-4" >
// //         {/* <label for="validationDefault01" class="form-label">First name</label> */}
// //         <input type='text' class="form-control" id="validationDefault01"  required></input>
// //         </div>
// //         <div class="col-md-4" >
// //         <label for="validationDefault01" class="form-label">Email</label>
// //         <input type='email' class="form-control" id="validationDefault01"  required></input>
// //         </div>

// //         <div class="col-md-4" >
// //         <label for="validationDefault01" class="form-label">Address</label>
// //         <input type='text' class="form-control" id="validationDefault01"  required></input>
// //         </div>

// //         <div class="col-md-4" >
// //         <label for="validationDefault01" class="form-label">Address</label>
// //         <input type='text' class="form-control" id="validationDefault01"  required></input>
// //         </div>
// // <button class="btn btn-primary" type="submit">Submit</button>
// // </form>


// //     </div>
// <div>
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';

// {/* function Userproductview() {
//   let id = useParams();
//   const [usrid, setusrid] = useState({
//     userid: localStorage.getItem("logid"),
//   }); */}

//   // const [count, setCount] = useState(1);
//   // const [finprice, setfinprice] = useState("");
//   // const [foodadd, setfoodadd] = useState({});
//   // const [placeorder, setplaceorder] = useState({
//   //   stockid: id.id,
//   //   userid: localStorage.getItem('logid'),
//   //   Quantity: '',
//   //   Paymenttype: '',
//   //   CardNumber: '', 
//   //   OrderAddress: '', 
//   // });
//   // const navigate = useNavigate();

//   // Increment decrement function for quantity
//   // const IncrementItem = () => {
//   //   setCount(count + 1);
//   //   setplaceorder({ ...placeorder, Quantity: count });
//   // };
//   // const DecrementItem = () => {
//   //   setCount(count - 1);
//   //   setplaceorder({ ...placeorder, Quantity: count });

//   //   if (count <= 1) {
//   //     alert("no product");
//   //     return;
//   //   }
//   //   setCount(count - 1);
//   // };

//   // Set price according to count
//   // useEffect(() => {
//   //   if (count >= 1) {
//   //     setfinprice(parseInt(foodadd.Price) * parseInt(count));
//   //   } else if (count === 1) {
//   //     setfinprice(parseInt(foodadd.Price));
//   //   } else {
//   //     setfinprice(parseInt(foodadd.Price));
//   //   }
//   // }, [foodadd.Price, count]);

//   // const orderfn = (e) => {
//   //   const { name, value } = e.target;
//   //   setplaceorder({
//   //     ...placeorder,
//   //     [name]: value,
//   //     Finalprice: finprice,
//   //     Quantity: count,
//   //   });
//   // };

//   // useEffect(() => {
//   //   axios
//   //     .post(`http://localhost:3900/viewone/${id.id}`)
//   //     .then((result) => {
//   //       setfoodadd(result.data.msg);
//   //       console.log(result.data.msg);
//   //       console.log(result);
//   //     })
//   //     .catch((err) => {
//   //       alert("error");
//   //       console.log(err);
//   //     });
//   // }, []);

//   // const subfn = (e) => {
//     // e.preventDefault();
//   //   console.log("order", placeorder);
//   //   axios
//   //     .post(`http://localhost:3900/orders`, placeorder)
//   //     .then((result) => {
//   //       console.log(result);
//   //       if (result.request.status === 200) {
//   //         alert("Order successfully added");
//   //         navigate("/userhome");
//   //       } else {
//   //         alert("error");
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       alert("error");
//   //     });
//   // };

//   // return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#"></a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/userhome" style={{ textDecoration: 'none' }}>
//                   <a className="nav-link active" aria-current="page" href="#">
//                     Home page
//                   </a>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to={`/vieworderbycust/${usrid.userid}`}
//                   style={{ textDecoration: 'none' }}
//                 >
//                   <a className="nav-link active" aria-current="page" href="#">
//                     View My Orders
//                   </a>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/home" style={{ textDecoration: 'none' }}>
//                   <a className="nav-link active" aria-current="page" href="#">
//                     Logout
//                   </a>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <form onSubmit={subfn}>
//         <div id="prdt1">
//           <div>
//             <h2 id="prdt2">ORDER NOW</h2>
//           </div>
//           <div>
//             <img
//               src={`http://localhost:3900/${foodadd.img}`}
//               alt="images"
//               id="imgpdtv"
//             ></img>
//           </div>
//           <div id="prdt3">
//             <h4>{foodadd.Foodname}</h4>
//           </div>
//           <div id="prdt4">
//             <h6>{foodadd.Resturantname}</h6>
//           </div>
//           <div id="prdt4">
//             ₹
//             <input
//               type="number"
//               value={finprice}
//               name="Finalprice"
//               onChange={orderfn}
//               id="inpfin"
//             />
//           </div>
//           <div id="prdt4">
//             <h6>{foodadd.Details}</h6>
//           </div>

//           <div id="dd">
//             <tr>
//               <td>Count : </td>
//               <td>
//                 <button type="button" onClick={DecrementItem}>
//                   -
//                 </button>
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   name="Quantity"
//                   value={count}
//                   onChange={orderfn}
//                   id="orde6"
//                 ></input>
//               </td>
//               <td>
//                 <button type="button" onClick={IncrementItem}>
//                   +
//                 </button>
//               </td>
//             </tr>
//           </div>
//           <div>
//             <tr>
//               <td>
//                 <div id="orde7">Payment Type : </div>
//               </td>
//               <td>
//                 <div id="orde10">
//                   <input
//                     type="radio"
//                     name="Paymenttype"
//                     value="Creditcard"
//                     onChange={orderfn}
//                   />
//                   Credit Card
//                   <input
//                     type="radio"
//                     name="Paymenttype"
//                     value="Cash On Delivery"
//                     onChange={orderfn}
//                   />
//                   Cash On Delivery
//                 </div>
//               </td>
//             </tr>
//           </div>

//           {/* Render card number and order address based on payment type */}
//           {placeorder.Paymenttype === 'Creditcard' && (
//             <div>
//               <div>
//                 <label>Card Number:</label>
//                 <input
//                   type="text"
//                   name="CardNumber"
//                   value={placeorder.CardNumber}
//                   onChange={orderfn}
//                 />
//               </div>
//               <div>
//                 <label>Order Address:</label>
//                 <input
//                   type="text"
//                   name="OrderAddress"
//                   value={placeorder.OrderAddress}
//                   onChange={orderfn}
//                 />
//               </div>
//             </div>
//           )}

//           <button type="submit" id="ordbtn" className="btn btn-success">
//             Place Order
//           </button>
//         </div>
//       </form>
//     </div>
// //   );
// // }

// // export default Userproductview;

// // </div>
// //   )
// // }

// // export default Exqmple1
// import React, { useState } from 'react';

// function PasswordToggle() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState('');

//   const handleCheckboxChange = () => {
//     setShowPassword(!showPassword);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div>
//       <label>
//         Password:
//         <input
//           type={showPassword ? 'text' : 'password'}
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <label>
//         Show Password:
//         <input
//           type="checkbox"
//           checked={showPassword}
//           onChange={handleCheckboxChange}
//         />
//       </label>
//     </div>
//   );
// }

// export default PasswordToggle;
