import React, { Component } from "react";
import css from "./pagecanopy.css"

import Navbar from "../Navbar/Navbar.jsx";

class PageCanopy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "static"
    }
  }

  componentWillReceiveProps(nextProps) {
    const position = nextProps.position;
    if (position !== this.state.position) {
      this.setState({ position });
    }
  }

  render() {
    let style;
    if (this.state.position === "fixed") {
      style = { bottom: -50 };
    }
    return (
      <div style={{ position: "relative" }}>
        <div className={css.ProfileCanopyBG}></div>
        <div className={css.ImageAligner}>
          <img
            style={style}
            className={css.ProfileAvatar_image}
            src="https://pbs.twimg.com/profile_images/1393958859/main_400x400.jpg" alt="johnoliver"/>
        </div>
        <Navbar position={this.state.position} />
      </div>
    )
  }
}

export default PageCanopy;