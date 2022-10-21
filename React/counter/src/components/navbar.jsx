import React from "react";

const Navbar = ({ totalItems }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item position-relative">
        <a className="nav-link disabled">
          Shopping Cart{" "}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            <span className="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
