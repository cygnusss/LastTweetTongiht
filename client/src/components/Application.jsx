import React, { Component } from "react";
import $ from "jquery";

import FeedContainer from "../containers/FeedContainer.jsx";
import PageCanopy from "./PageCanopy/PageCanopy.jsx";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = { position: "static", moveAvatar: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() >= 220){
        this.setState({ moveAvatar: true });
      } else {
        this.setState({ moveAvatar: false });
      }
      
      if ($(window).scrollTop() >= 280){
        this.setState({ position: "fixed" });
      } else {
        this.setState({ position: "static" });
      }
    });
  }

  render() {
    return (
      <div>
        <PageCanopy position={this.state.position} moveAvatar={this.state.moveAvatar} />
        <FeedContainer position={this.state.position} />
      </div>
    )
  }
}

export default Application;