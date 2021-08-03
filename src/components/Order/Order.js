import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import loading from "../../images/loading.gif";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./Order.css";
import { useContext } from "react";
import { UserContext } from "../../App";

const Order = () => {
  const [UserDetails, setUserDetails] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // useEffect(() => {
  //   fetch("https://cryptic-ravine-00737.herokuapp.com/ownSelfOrder?email=" + loggedInUser.email)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserDetails(data);
  //       console.log("your data", data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(
      "https://cryptic-ravine-00737.herokuapp.com/ownOrder?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
        console.log("data", data);
      });
  }, []);

  console.log("loggedInUser", loggedInUser);
  console.log("UserDetails", UserDetails);
  return (
    <>
      <div className="for-header mb-5 pt-1">
        <Header></Header>
      </div>
      <div className="heading container mb-5 pb-4">
        <h1>Welcome to Order Section Panel</h1>
        <p>
          You will be get Your Order here.just and check For Your order. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt
          consectetur numquam nihil deleniti quam facilis culpa. Ad, dolorem
          atque! Ipsam ullam sapiente repudiandae rem? Autem mollitia distinctio
          dolore enim.
        </p>
      </div>
      <div className="div-for-spinner text-center ">
        {UserDetails.length === 0 && (
          <div className="text-center">
            <img src={loading} alt="" />
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          {UserDetails.map((UserDetail) => (
            <OrderDetails UserOrder={UserDetail}></OrderDetails>
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
