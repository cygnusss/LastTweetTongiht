import React, { Component } from "react";
import $ from "jquery";

import Feed from "../Feed/Feed.jsx";
import PageCanopy from "../PageCanopy/PageCanopy.jsx";
import Modal from "../Modal/Modal.jsx";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "static",
      moveAvatar: false,
      tweetData: { // All props are initially undefined to avoid errors
        profileImage: undefined,
        name: undefined,
        screen_name: undefined,
        text: undefined,
        date: undefined,
        clicked: false,
      },
    };

    this.handleTweetClick = this.handleTweetClick.bind(this);
  }

  handleTweetClick(tweetData) { this.setState({ tweetData }); }

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
        <Modal tweetData={this.state.tweetData} handleTweetClick={this.handleTweetClick}/>
        <PageCanopy position={this.state.position} moveAvatar={this.state.moveAvatar} />
        <Feed position={this.state.position} handleTweetClick={this.handleTweetClick} />
      </React.Fragment>
    )
  }
}

export default Application;