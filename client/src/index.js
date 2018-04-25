import React, { Component }from "react";
import { render } from "react-dom";
import $ from "jquery";

import Feed from "./Feed/Feed.jsx";
import PageCanopy from "./PageCanopy/PageCanopy.jsx";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = { position: "static" };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() >= 280){
        this.setState({ position: "fixed" })
      } else {
        this.setState({ position: "static" })
      }
    });
  }

  render() {
    return (
      <div>
        <PageCanopy position={this.state.position}/>
        <Feed position={this.state.position}/>
      </div>
    )
  }
}

const ROOT = document.getElementById("root");
render(<Application />, ROOT);