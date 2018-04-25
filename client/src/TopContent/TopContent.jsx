import React, { Component } from "react";
import css from "./topcontent.css"

import Navbar from "../Navbar/Navbar.jsx";

class TopContent extends Component {
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
    return (
      <div>
        <div className={css.userBackground}></div>
        <Navbar position={this.state.position} />
      </div>
    )
  }
}

export default TopContent;