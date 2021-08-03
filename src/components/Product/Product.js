import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Product.css";

const Product = (props) => {
  const imageItem = props.ProductDetails;
  const { imageURL, name, price, _id } = imageItem;

  const history = useHistory();
  const handleClick = (_id) => {
    const url = `product/${_id}`;
    history.push(url);
  };

  return (
    <>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-showing text-center">
              <img src={imageURL} alt="" />
            </div>
          </div>
          <div className="col-lg-6 py-5 mt-5">
            <div className="product">
              <h5>About this product</h5>
              <p>
                ipsum dolor sit amet, consectetur adipisicing elit. Iste officia
                temporibus amet quae voluptatem rerum soluta animi, suscipit
                odit veniam sunt.
              </p>
              <div className="flex-need">
                <h5>{name}</h5>
                <strong>$ {price}</strong>
              </div>
              <button onClick={() => handleClick(_id)}>Buy Now </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
