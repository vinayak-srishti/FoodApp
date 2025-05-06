import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderaftLogin() {
  const [usrid, setusrid] = useState({
    userid: localStorage.getItem("logid"),
  });
  console.log(usrid);

  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/userhome" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Home page
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to={`/vieworderbycust/${usrid.userid}`}
                  style={{ textDecoration: "none" }}
                >
                  <a class="nav-link active" aria-current="page" href="#">
                    View My Orders
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/custprof" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    View My Profile
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderaftLogin;
