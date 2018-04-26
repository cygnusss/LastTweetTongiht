import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import BigNumber from "bignumber.js";

import TweetsList from "../TweetList/TweetList.jsx";
import css from "./feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: [],
      max_id: undefined, // Keeps track of the last fetched tweet's ID (- 1 to avoid duplicates)
      position: "static", // For aligning feed when the navbar's position changes to fixed
    };
    
    this.getTweets = this.getTweets.bind(this);
  }

  componentDidMount() {
    this.getTweets();
    window.addEventListener("scroll", () => {
      // If the top scroll + the size of the screen equals to the size
      // of the entire document (ie user has reached the screen's bottom) – page will load more tweets
      if ($(window).scrollTop() + $(window).height() == $(document).height()){
        this.getTweets()
      }
    });
  }
  
  componentWillReceiveProps(nextProps) {
    // This will listen to the parent component to pass props
    // and will update the state when the navbar's position changes to fixed
    const position = nextProps.position;
    if (position !== this.state.position) {
      this.setState({ position })
    }
  }

  getTweets() {
    axios("/tweets", { params: {max_id: this.state.max_id} })
      .then(({ data }) => {
        // Tweet_ids are really big numbers
        // so in order to avoid possible issues (duplicate tweets or loosing tweets)
        // I used the BigNumber module that lets you properly work with big numbers
          // Saving last tweet's id and substracting 1 from it allows to fetch
          // tweets with IDs less then that of the last fetched tweet
        // I am not sure yet how Twitter gives IDs – the workaround may be more simple
        const id_str = data[data.length - 1].id_str;
        const max_id = BigNumber(id_str).minus(1).toString(10);
        
        // Update state with new tweets and max_id
        const tweets = this.state.tweets.slice().concat(data)
        this.setState({ tweets, max_id });
      });
  }
  
  render() {
    // Adds 60 to Feed's top padding if the navbar changes its position to fixed
    let style = {};
    if (this.state.position === "fixed") { style.paddingTop = 60; }
    return (
      <div className={ css.stream } style={style}>
        <ol className={ css.stream_container }>
          <div className={ css.profile_heading }></div>
          <TweetsList tweets={this.state.tweets} handleTweetClick={ this.props.handleTweetClick }/>
        </ol>
        {/* Results in calling getTweets too frequently */}
        {/* Might need throttle later to solve this*/}
        {/* { this.state.loading ?
          <div className={css.spinner_container}>
            <div className={ css.spinner }></div> 
          </div> 
          : "" } */}
      </div>
    );
  }
}

export default Feed;
