// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import img from '../Images/OIP.jpeg'

// function Viewcustprof() {
   
// const[viewcust,setviewcust]=useState({})

//     useEffect(()=>{
//         const id=localStorage.getItem("logid")
//         console.log(id);
//         axios.post(`http://localhost:3900/viewcustone/${id}`)
//         .then((response)=>{
//             setviewcust(response.data.msg)
//             console.log(response.data.msg);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     },[])
//   return (
//     <div>
//                  <section class="vh-100" style={{backgroundColor:"#f4f5f7;"}}>
//         <div class="container py-5 h-100">
//           <div class="row d-flex justify-content-center align-items-center h-100">
//             <div class="col col-lg-6 mb-4 mb-lg-0">
//               <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
//                 <div class="row g-0">
//                   <div
//                     class="col-md-4 gradient-custom text-center text-white"
//                     style={{borderTopLeftRadius:" .5rem;", borderBottomLeftRadius: ".5rem;"}}
//                   >
//                     <img
//                       src={img}
//                       alt="Avatar"
//                       class="img-fluid my-5"
//                       style={{width: "80px;"}}
//                     />
//                    <h5 style={{color: "black",fontFamily:'cursive',fontWeight:'700'}}></h5> 
                  
//                     <i class="far fa-edit mb-5"></i>
//                   </div>
//                   <div class="col-md-8">
//                     <div class="card-body p-4">
//                       <h6 style={{color: "violet",fontFamily:'cursive',fontWeight:'700'}}>Hello {viewcust.Name} </h6>
//                       <hr class="mt-0 mb-4" />
//                       <div class="row pt-1">
//                       <div class="col-6 mb-3">
//                           <h6>Email</h6>
//                           <p class="text-muted">{viewcust.Name}</p>
//                         </div>
//                         <div class="col-6 mb-3">
//                           <h6>Email</h6>
//                           <p class="text-muted">{viewcust.Email}</p>
//                         </div>
//                         <div class="col-6 mb-3">
//                           <h6>Contact</h6>
//                           <p class="text-muted">{viewcust.Number}</p>
//                         </div>
//                       </div>
                 
//                       <hr class="mt-0 mb-4" />
//                       <div class="row pt-1">
//                         <div class="col-6 mb-3">
//                           <h6>Address</h6>
//                           <p class="text-muted">{viewcust.Address}</p>
//                         </div>
                        
//                         <div class="col-6 mb-3">
//                           <h6>Password</h6>
//                           <p class="text-muted">{viewcust.Password}</p>
//                         </div>
//                       </div>
                     
//                    <button type='submit' class='btn btn-danger h-23 w-100 py-2'>Edit</button>
                
//                     </div>
//                   </div>
                      
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// export default Viewcustprof