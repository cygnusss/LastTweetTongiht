import React, { Component }from "react";
import { render } from "react-dom";
import $ from "jquery";

import Feed from "./Feed/Feed.jsx";
import PageCanopy from "./PageCanopy/PageCanopy.jsx";
import Modal from "./Modal/Modal.jsx";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = { position: "static", moveAvatar: false, tweetData: null };
    this.handleTweetClick = this.handleTweetClick.bind(this);
  }

  handleTweetClick(tweetData) {
    console.log(tweetData)
    this.setState({ tweetData });
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
      <React.Fragment>
        <Modal tweetData={this.state.tweetData}/>
        <PageCanopy position={this.state.position} moveAvatar={this.state.moveAvatar} />
        <Feed position={this.state.position} handleTweetClick={this.handleTweetClick} />
      </React.Fragment>
    )
  }
}

const ROOT = document.getElementById("root");
render(<Application />, ROOT);