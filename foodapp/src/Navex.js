import React from 'react'
import { Link } from 'react-router-dom'

function Navex() {
    return (
        <div>
            {/* <div>
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
          <Link
            to=""
            class="navbar-brand d-flex align-items-center px-4 px-lg-5">
          </Link>
          <button
            type="button"
            class="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="" class="nav-item nav-link">
                Home
              </Link>
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Plants
                </a>
                <div class="dropdown-menu rounded-0 m-0">
                  <Link to="" class="dropdown-item">
                    Add Plant
                  </Link>
                  <Link to="/ViewMyPlants" class="dropdown-item">
                    View My Plants
                  </Link>
                  <Link to="" class="dropdown-item">
                    View Received Orders 
                  </Link>
                  <Link to="" class="dropdown-item">
                    Plant Wishlist
                  </Link>
                  <Link to='' class="dropdown-item">
                    Product Wishlist
                  </Link>
                </div>
              </div>

              <Link to="" class="nav-item nav-link">
                Explore
              </Link>
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Customer
                </a>
                <div class="dropdown-menu rounded-0 m-0">
                  <Link to="" class="dropdown-item">
                    Customer Profile
                  </Link>
                  <Link to="/ViewMyGDDesOrder" class="dropdown-item">
                    {" "}
                    Garder Design Appointment Status
                  </Link>
                  <Link to="/ViewMyFlorDesOrder" class="dropdown-item">
                    {" "}
                    Florist Design Appointment Status
                  </Link>
                  <Link to="/ViewMyProductOrders" class="dropdown-item">
                    {" "}
                    Product Order Status
                  </Link>
                  <Link to="/ViewMyPlantOrders" class="dropdown-item">
                    {" "}
                    Plant Order Status
                  </Link>
                </div>
              </div>
              <Link to="/register" class="nav-item nav-link">Register</Link>
              <Link
                onClick={() => {
                  localStorage.clear();
                  window.location.reload(false);
                }}
                class="nav-item nav-link"
              >
                Logout
              </Link>
            </div>
           
          </div>
        </nav> */}
            {/* </div> */}


            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navex