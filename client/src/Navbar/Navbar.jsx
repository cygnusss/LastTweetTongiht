import React, { Component } from "react";
import css from "./navbar.css";

const Navbar = ({ position }) => {
  const addClass = position == "fixed" ? " " + css.fixed : "";
  return (
    <div 
      className={css.navbar + addClass}
    >
    </div>
  )
}

// class Navbar extends Component {
//   render() {
//     return (
//       <div className={css.navbar}></div>
//     )
//   }
// }

export default Navbar