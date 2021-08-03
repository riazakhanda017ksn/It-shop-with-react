import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Product from "../Product/Product";
import Header from "../Header/Header";
import shopping from "../../images/cart.png";
import loading from "../../images/loading.gif";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    fetch("https://cryptic-ravine-00737.herokuapp.com/events?search=" + search)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);
  // ============>
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log("event.target.value", event.target.value);
  };

  ///pagination-part
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  ///
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProduct = products.slice(indexOfFirstPost, indexOfLastPost);

  //post per page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header></Header>
      <section className="py-5 mt-5 pt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3"> </div>
            <div className="col-lg-6">
              <form action="">
                <div className="search-item text-center mb-1">
                  <input
                    type="search"
                    onBlur={handleSearch}
                    name=""
                    id=""
                    placeholder="Search your favorite mobile"
                  />
                  <img src={shopping} alt="" />
                </div>
                <div className="div-for-spinner text-center ">
                  {products.length === 0 && (
                    <div className="text-center">
                      <img src={loading} alt="" />
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="col-lg-3"> </div>
          </div>
          <div className="row">
            {currentProduct.map((product) => (
              <Product ProductDetails={product}></Product>
            ))}
          </div>
          <Pagination
            postPerPage={postPerPage}
            totalPosts={products.length}
            paginate={paginate}
          ></Pagination>
        </div>
      </section>
    </div>
  );
};

export default Home;
