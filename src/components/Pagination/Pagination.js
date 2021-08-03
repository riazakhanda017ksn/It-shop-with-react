import React from "react";
import "./Pagination.css";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      {pageNumber.map((number) => (
        <li>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
