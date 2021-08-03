import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./ProductList.css";

const ProductList = (props) => {
  const { name, price, quantity, _id } = props.productItem;
  const hidden = document.getElementById("delete");
  const deleteEvent = (id) => {
    fetch(`https://cryptic-ravine-00737.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          hidden.style.display = "none";
        }
        console.log("result", result);
      });
  };
  return (
    // onClick={()=>deleteEvent(_id)}

    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>{quantity}</td>

      <td>
        <button onClick={() => deleteEvent(_id)} className="remove-product">
          {" "}
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductList;
