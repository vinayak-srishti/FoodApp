import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Userregister() {
  const [register, setregister] = useState({
    Name: "",
    Email: "",
    Address: "",
    Number: "",
    Password: "",
    img: null,
  });
  const myfunc = (a) => {
    if (a.target.name == "img") {
      setregister({
        ...register,
        img: a.target.files[0],
      });
    } else {
      setregister({
        ...register,
        [a.target.name]: a.target.value,
      });
    }
    console.log(register);
  };
  const navigate = useNavigate();
  const regfunc = (b) => {
    console.log("submitted", register);

    b.preventDefault();
    if (register.Name.length == 0) {
      alert("Plese enter name");
      return;
    }
    if (register.Email.length == 0) {
      alert("Plese enter Email");
      return;
    }
    if (register.Address.length == 0) {
      alert("Plese enter Address");
      return;
    }
    if (register.Number.length != 10) {
      alert("Number should contain atleast 10 character");
      return;
    }
    if (register.Password.length <= 6) {
      alert("Password should contain atleast 6character");
      return;
    }
    axios
      .post(`http://localhost:3900/register`, register, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        alert("registered successfully");
        navigate("/userlogin");
        console.log(result);
        window.location.reload(false);
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  };
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div className="regMain">

      <form onSubmit={regfunc}>
        <div id="usrreg">
          <h4 id="head2">NEW USER REGISTER HERE</h4>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="inpa1"
              className="form-control"
              name="Name"
              value={register.Name}
              onChange={myfunc}
            ></input>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email "
              id="inpa2"
              className="form-control"
              name="Email"
              value={register.Email}
              onChange={myfunc}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Address "
              id="inpa3"
              className="form-control"
              name="Address"
              value={register.Address}
              onChange={myfunc}
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Your Phonenumber "
              id="inpa4"
              className="form-control"
              name="Number"
              value={register.Number}
              onChange={myfunc}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="inpa5"
              className="form-control"
              name="Password"
              value={register.Password}
              onChange={myfunc}
            ></input>
          </div>
          <div>
            <input type="file" id="inpa5" name="img" onChange={myfunc}></input>
          </div>
          <button type="submitt" id="reg" className="btn btn-danger">
            Register
          </button>
        </div>
      </form>
      </div>

    </div>
  );
}

export default Userregister;
