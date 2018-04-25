import React, { Component } from "react";
import css from "./navbar.css";

const Navbar = ({ position, moveAvatar }) => {
  const addClass = position == "fixed" ? " " + css.fixed : "";
  let style;
  if (moveAvatar) {
    style = { paddingTop: 0, overflow: "auto" }
  }
  return (
    <div className={css.navbar + addClass}>
      <div className={css.navbar_aligner}>
        <div className={css.navbar_card} style={style}>
          <div className={css.grid} style={{ width: "33.33333%" }}>
            <div className={css.navbar_card_mini}>
              <img 
                style={{ maxWidth: 40, maxHeight: 40, borderRadius: "50%", float: "left", marginRight: 10 }}
                src="https://pbs.twimg.com/profile_images/1393958859/main_400x400.jpg" alt="johnoliver"/>
              <a
                style={{ fontWeight: "bold", textDecoration: "none", color: "black", fontSize: 18, paddingLeft: 2 }} 
                href="https://twitter.com/iamjohnoliver">John Oliver</a>
              <a
                style={{ textDecoration: "none", color: "#CE1527", display: "inline-block", fontSize: 14 }} 
                href="https://twitter.com/iamjohnoliver">
                @iamjohnoliver
              </a>
            </div>
          </div>
          <div className={css.grid} style={{ width: "66.66666%", textAlign: "right" }}>
            <div>
              <h3>LAST TWEET TONIGHT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;