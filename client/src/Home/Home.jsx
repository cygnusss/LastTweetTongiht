import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

import TweetsList from "../TweetList/TweetList.jsx"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      loading: false, // Later I may Add a spinner using this
    };

    this.getTweets = this.getTweets.bind(this);
  }

  componentDidMount() {
    this.getTweets();
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() + $(window).height() == $(document).height()){
        this.getTweets();
      }
    });
  }

  getTweets() {
    this.setState({ loading: true });
    axios("/tweets")
      .then(({ data }) => {
        const tweets = this.state.tweets.slice().concat(data)
        this.setState({ tweets });
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.tweets.length) {
      return (
        <React.Fragment>
        <ul>
          <TweetsList tweets={this.state.tweets}/>
        </ul>
        {
          this.state.loading 
            ? <p>loading...</p>
            : ""
        }
        </React.Fragment>
      );
    } else {
      return "";
    }
  }
}

export default Home;