import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Userhome() {
  const [food, setfood] = useState([]);

  const [usrid, setusrid] = useState({
    userid: localStorage.getItem("logid"),
  });
  console.log(usrid);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:3900/viewfood")
      .then((result) => {
        console.log("success", result);
        setfood(result.data.msg);
        console.log(result.data.msg);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
  }, []);
  return (
    <div id="bckimg">
      <div id="frntimg">
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                  <a class="nav-link active" aria-current="page" href="#">
                    Home page
                  </a>
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
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <a class="nav-link active" aria-current="page" href="#">
                      Logout
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <div>
          {food && food.length ? (
            food?.map((details) => {
              return (
                // <Link to={"/userproductview/"+details._id}>
                <div id="div1">
                  <div>
                    <img
                      src={`http://localhost:3900/${details.img}`}
                      alt="image"
                      id="prjtimg"
                    ></img>
                  </div>
                  <div id="fod">
                    <h3>{details.Foodname}</h3>
                    <p id="fod1">₹{details.Price}</p>
                  </div>
                  <Link to={"/userproductview/" + details._id}>
                    <button type="button" class="btn btn-info">
                      Get Now 🤤
                    </button>
                  </Link>
                </div>
                // </Link>
              );
            })
          ) : (
            <>
              <h3 style={{ textAlign: "center", fontSize: "30px" }}>
                No Items Available
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userhome;
