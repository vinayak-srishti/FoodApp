import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Adminviewcustomers() {
  const [viewuser, setviewuser] = useState([]);

  useEffect(() => {
    axios
      .post(`http://localhost:3900/viewcust`)
      .then((result) => {
        console.log(result);
        setviewuser(result.data.msg);
        console.log(result.data.msg);
      })

      .catch((err) => {
        alert("error");
        console.log(err);
      });
  }, []);

  const dltfn = (_id) => {
    {
      axios
        .post(`http://localhost:3900/deletecust/${_id}`)
        .then((result) => {
          console.log(result);
          alert("User deleted successfully");
          window.location.reload(false);
        })
        .catch((err) => {
          alert("err");
        });
    }
  };
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
                <Link to="/adminhome" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/addfood" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Add Food
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admincustview" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    View Customers
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/deletefood" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Update Food
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/viewusersadmin" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    View All Orders
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   height: '100vh'
        }}
      >
        <div id="adminvc">
          <div>
            <tr>
              <th id="cn1">Customer Name</th>
              <th id="cn1">Customer MailId</th>
              <th id="cn1">Customer Place</th>
              <th id="cn1">Phone Number</th>
              <th id="cn1"> </th>
            </tr>
            {viewuser.map((details) => {
              return (
                <tr>
                  <td id="cn2">{details.Name}</td>
                  <td id="cn2">{details.Email}</td>
                  <td id="cn2">{details.Address}</td>
                  <td id="cn2">{details.Number}</td>
                  <td id="cn2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        dltfn(details._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminviewcustomers;
