import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import admin from "../../images/3129492.jpg";
const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://cryptic-ravine-00737.herokuapp.com/addProduct`;

    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      console.log("res data", res);
    });
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3b8fa16325c0baa1794c79a7349a090d");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //

  return (
    <div>
      <>
        <Header></Header>
      </>
      <div className="container  mt-5 pt-4 ">
        <div className="heading">
          <h1>Welcome to Admin Panel</h1>
          <p>
            The Admin panel for everyone.any can access . Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Obcaecati deserunt consectetur
            numquam nihil deleniti quam facilis culpa. Ad, dolorem atque! Ipsam
            ullam sapiente repudiandae rem? Autem mollitia distinctio dolore
            enim.
          </p>
        </div>
        <div className="row pt-5 ">
          <div className="col-lg-4  ">
            <div className="admin-bg">
              <div className="admin-text">
                <div className="admin-panel text-center text-light mb-5">
                  <h3>Admin Panel </h3>
                </div>

                <div className="product-manage  text-light">
                  <Link to="/manageOrder">
                    {" "}
                    <h5>
                      {" "}
                      <span className="mr-4  sticker">
                        <FontAwesomeIcon icon={faUser} />{" "}
                      </span>{" "}
                      Manage Product{" "}
                    </h5>
                  </Link>
                </div>

                <div className="product-manage  text-light mt-4">
                  <Link to="/admin">
                    <h5>
                      {" "}
                      <span className="mr-4  sticker">
                        <FontAwesomeIcon icon={faPlus} />{" "}
                      </span>{" "}
                      Add Product{" "}
                    </h5>
                  </Link>
                </div>
                <div className="product-manage  text-light mt-4">
                  <Link to="/manageOrder">
                    <h5>
                      {" "}
                      <span className="mr-4  sticker">
                        <FontAwesomeIcon icon={faEdit} />{" "}
                      </span>{" "}
                      Edit Product{" "}
                    </h5>
                  </Link>
                </div>
                <div className="product-manage  text-light mt-4">
                  <Link to="/home" onClick={() => setLoggedInUser("")}>
                    <h5>
                      {" "}
                      <span className="mr-4  sticker">
                        <FontAwesomeIcon icon={faSignOutAlt} />{" "}
                      </span>{" "}
                      Log Out{" "}
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="add-product mt-5 pt-3">
              <h3>Add Product</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-inline">
                  <input
                    name="name"
                    placeholder="Product Name"
                    {...register("name")}
                    required
                  />

                  <input
                    name="quantity"
                    placeholder="Quantity"
                    {...register("quantity")}
                    required
                  />

                  <input
                    name="price"
                    placeholder="Add Price"
                    {...register("price")}
                    required
                  />

                  <input
                    name="exampleRequired"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  <br />
                  <button type="submit">Upload Product</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="admin-img">
              <img src={admin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
