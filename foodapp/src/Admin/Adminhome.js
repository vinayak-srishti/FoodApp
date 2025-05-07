import React from 'react'
import { Link } from 'react-router-dom'



function Adminhome() {
    return (
        <div className='main_Backdround'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                <div class="container-fluid"  >
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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


            <div>
                <h3 className='head_mianAdmin'>
                    Welcome to FoodNetworkingApp
                </h3>
                <p className='p_adminMain'>
                    Welcome Admin
                </p>
            </div>
        </div>
    )
}

export default Adminhome