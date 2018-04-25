import React, { Component } from "react";
import css from "./navbar.css";

const Navbar = ({ position, moveAvatar }) => {
  const addClass = position == "fixed" ? " " + css.fixed : "";
  let style;
  if (moveAvatar) {
    style = { paddingTop: 0 }
  }
  return (
    <div className={css.navbar + addClass}>
    <div className={css.navbar_aligner}>
      <div className={css.navbar_card} style={style}>
        <div className={css.navbar_card_mini}>
          <img 
            style={{ maxWidth: 40, maxHeight: 40 }}
            src="http://www.unixstickers.com/image/data/stickers/golang/Go-brown.sh.png" alt="gopher"/>
        </div>
      </div>
    </div>
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