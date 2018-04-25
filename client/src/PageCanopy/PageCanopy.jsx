import React, { Component } from "react";
import css from "./pagecanopy.css"

import Navbar from "../Navbar/Navbar.jsx";

class PageCanopy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "static",
      moveAvatar: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const position = nextProps.position;
    const moveAvatar = nextProps.moveAvatar;
    if (position !== this.state.position) {
      this.setState({ position });
    }
    if (moveAvatar !== this.state.moveAvatar) {
      this.setState({ moveAvatar });
    }
  }

  render() {
    let style;
    if (this.state.moveAvatar) {
      style = { bottom: 150 };
    }
    return (
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className={css.ProfileCanopyBG}></div>
        <div className={css.ImageAligner}>
          <div  className={css.ProfileAvatar} style={style}>
            <a style={{ outline: "none" }} src={"https://twitter.com/iamjohnoliver"}>
              <img
                className={css.ProfileAvatar_image}
                src="https://pbs.twimg.com/profile_images/1393958859/main_400x400.jpg" alt="johnoliver"/>
            </a>
          </div>
        </div>
        <Navbar position={this.state.position} moveAvatar={this.state.moveAvatar} />
      </div>
    )
  }
}

export default PageCanopy;