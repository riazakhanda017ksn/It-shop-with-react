import React from "react";
import "./OrderDetails.css";
import gif from "../../images/scrolling.gif";

const OrderDetails = (props) => {
  const { name, price, email, orderTime } = props.UserOrder;

  return (
    <>
      <div className="col-lg-6">
        <div className="order-details">
          <h6>{name}</h6>
          <h6>${price}</h6>
          <h6>{email}</h6>
          <h6>{orderTime}</h6>
          <h6>
            Order Status : <span className="text-info pt-3">Done </span>
          </h6>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="order-gif">
          <img src={gif} alt="" />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
