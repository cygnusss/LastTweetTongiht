import React, { Component } from "react";
import $ from "jquery";

import Feed from "../Feed/Feed.jsx";
import PageCanopy from "../PageCanopy/PageCanopy.jsx";
import Modal from "../Modal/Modal.jsx";

// This is the top most component and it connects other components with each other
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

  // This is responsible for the lifecycle of the Modal component
  // If a tweet gets clicked it will open it in a modal view
  // and update the Application state with the last clicked tweet data
  handleTweetClick(tweetData) { this.setState({ tweetData }); }
  
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() >= 220){
        // When the page is scrolled over 220 px the John Oliver avatar will be moved up
        this.setState({ moveAvatar: true });
      } else {
        // Otherwise it will come back to its normal position
        this.setState({ moveAvatar: false });
      }
      
      // Changes Page Canopy's position to fixed when page is scrolled 280px down
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