import React from 'react'
import { Link } from 'react-router-dom'
import img from'../Images/Food_Network_New_Logo.png'

function Homepage() {
  return (
    <div id='main'>
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                    <div class="container-fluid"  >
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home page</a>
                                </li>
                                <li class="nav-item">
                                <Link to='/userreg' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#">New User Register Here</a></Link>
                                </li>
                                <li class="nav-item">
                                <Link to='/userlogin' style={{textDecoration:'none'}}><a class="nav-link active" aria-current="page" href="#"> User Login Here</a></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav> */}

        <div>
            
            <div id='hm1'><h1>Welcome to Food Delivery App</h1></div>
            <div><p id='hmm1'>Satisfy your cravings with a world of flavors right at your fingertips.<br></br> Whether you're in the mood for mouthwatering pizzas, savory sushi,<br></br> or delightful desserts, we've got you covered.</p></div>
            <tr><td><div ><img src={img} alt='image' width="300px" height="300px" id='image'></img></div></td>
            <td><div><h4 id='hmm2'>🍔 Explore our diverse menu and discover new favorites.<br></br>
🛒 Conveniently place your order online.<br></br>
🚀 Enjoy fast and hassle-free delivery to your doorstep.</h4></div>
</td></tr>
<div><Link to='/userlogin'><button type='submit' id='expbtn' class="btn btn-primary">Explore With Us Now!</button></Link></div>
            
            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                <p style={{color:"red;"}}>Satisfy your cravings with a world of flavors right at your fingertips. Whether you're in the mood for mouthwatering pizzas, savory sushi, or delightful desserts, we've got you covered.</p><br></br>

🍔 Explore our diverse menu and discover new favorites.<br></br>
🛒 Conveniently place your order online.<br></br>
🚀 Enjoy fast and hassle-free delivery to your doorstep.<br></br>

Indulge in a culinary adventure today and treat yourself to a delicious meal. We're here to make your dining experience extraordinary.<br></br>

Start your food journey now! 🍽️"
</nav> */}
            {/* <div>
                <tr>
                    <td id='hm2' >Signup Here</td>
                    <td id='hm3'>Login Here</td>
                </tr>
                <tr>
                    <td id='hm4'><Link to='/userreg'><button type='submitt'class="btn btn-success">Signup</button></Link></td>
                    <td id='hm5'><Link to='/userlogin'><button type='submitt'class="btn btn-primary">Login</button></Link></td>
                </tr>
            </div> */}
            {/* <h2 id='hm2'>Signuup Here</h2>
            <h2 id='hm3'>Login Here</h2> */}

            
        </div>
    </div>
  )
}

export default Homepage