import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function Viewordercust() {
  let id = useParams();
  const [usrid, setusrid] = useState({
    userid: localStorage.getItem("logid"),
  });

  const [orders, setorders] = useState([]);
  useEffect(() => {
    axios
      .post(`http://localhost:3900/vieworderforuser/${id.id}`)
      .then((result) => {
        console.log(result);
        setorders(result.data.msg);
        console.log(result.data.msg);
      })
      .catch((err) => {
        alert("error");
      });
  }, []);

  const dltord = (_id) => {
    axios
      .post(`http://localhost:3900/deleteorder/${_id}`)
      .then((result) => {
        console.log(result);
        alert("Order deleted successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Error");
      });
  };

  return (
    <div>
      {
        // orders&&orders.length?()
      orders?.map((details) => {
        return (
          <div id="di1">
            <div>
              <tr>
                <td>
                  <img
                    src={`http://localhost:3900/${details.stockid.img}`}
                    alt="image"
                    width="200px"
                    height="150px"
                    id="imgg"
                  ></img>
                </td>
              </tr>
            </div>
            <div id="idd1">
              <tr>
                <td>Food Name : </td>
                <td>{details.stockid.Foodname}</td>
              </tr>
            </div>
            <div>
              <tr>
                <td>Resturant Name : </td>
                <td>{details.stockid.Resturantname}</td>
              </tr>
            </div>
            <div>
              <tr>
                <td>Quantity Ordered : </td>
                <td>{details.Quantity}</td>
              </tr>
            </div>
            <div>
              {" "}
              <tr>
                <td>Final Price : </td>
                <td>{details.Finalprice}</td>
              </tr>
            </div>
            <div>
              {" "}
              <tr>
                <td>OrderAddress : </td>
                <td>{details.Finaddress}</td>
              </tr>
            </div>
            <div>
              <tr>
                <td>Payment Type : </td>
                <td>{details.Paymenttype}</td>
              </tr>
            </div>

            {details.Paymenttype === "Creditcard" && (
              <div>
                <tr>
                  <td>Payment Status : </td>
                  <td>Payment Done</td>
                </tr>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => {
                dltord(details._id);
              }}
            >
              Delete Order
            </button>
          </div>
        );
      })
      
      }
    </div>
  );
}

export default Viewordercust;
