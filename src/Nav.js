import React from "react";
import "./App.css";
import './'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/pizza">
          <li>Order Pizza</li>
          </Link>
      </ul>
    </nav>
    </>
  );
};
export default Nav;