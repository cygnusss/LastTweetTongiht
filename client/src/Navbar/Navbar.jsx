import React, { Component } from "react";
import css from "./navbar.css";

// When user reaches a certain point in the page
// It triggers the scroll listener and in parent component updates the state's position and moveAvatar properties 
// They are further passed down to this component and depending on their value they change the position of the navbar
// and hide/show the avatar
const Navbar = ({ position, moveAvatar }) => {
  // Changes navbar's positioning
  const addClass = position == "fixed" ? " " + css.fixed : "";
  let style;
  // Hides/shows avatar
  if (moveAvatar) {
    style = { paddingTop: 0, overflow: "auto" }
  }
  return (
    <div className={css.navbar + addClass}>
      <div className={css.navbar_aligner}>
        <div className={css.navbar_card} style={style}>
          <div className={css.grid} style={{ width: "33.33333%" }}>
            <div className={css.navbar_card_mini}>
              <a href="https://twitter.com/iamjohnoliver">
                <img 
                  style={{ maxWidth: 40, maxHeight: 40, borderRadius: "50%", float: "left", marginRight: 10 }}
                  src="https://pbs.twimg.com/profile_images/1393958859/main_400x400.jpg" alt="johnoliver"
                />
              </a>
              <a
                style={{ fontWeight: "bold", color: "black", fontSize: 18, paddingLeft: 2 }} 
                href="https://twitter.com/iamjohnoliver">John Oliver</a>
              <a
                style={{ color: "#CE1527", display: "inline-block", fontSize: 14 }} 
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
