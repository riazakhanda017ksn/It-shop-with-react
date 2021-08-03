import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import "./ManageOrder.css";
const ManageOrder = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [manages, setManages] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ravine-00737.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setManages(data));
  });
  return (
    <div>
      <div className="mb-5 pb-5">
        <Header></Header>
      </div>
      <div className="table-of-manage-order">
        <table class="table table-borderless py-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove Product</th>
            </tr>
          </thead>

          <tbody>
            {manages.map((manage) => (
              <ProductList productItem={manage}></ProductList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
