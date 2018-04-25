import React from "react";
import css from "./tweetlist.css";

const TweetList = ({ tweets }) => (
  <React.Fragment>
    {
      tweets.map((tweet, index) => {
        const { text, created_at, user } = tweet;
        const { name } = user;
        return (
          <li className={css.tweet}>
            <h4>{ name }</h4>
            <p>{ text }</p>
            <p>{ created_at }</p>
          </li>
        )
      })
    }
  </React.Fragment>
);

export default TweetList;