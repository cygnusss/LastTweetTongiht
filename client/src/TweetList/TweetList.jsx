import React from "react";

const TweetList = ({ tweets }) => (
  <React.Fragment>
    {
      tweets.map((tweet, index) => {
        const { text, id } = tweet;
        return (
          <li>
            <p>{ text }</p>
            <p>ID: { id }</p>
          </li>
        )
      })
    }
  </React.Fragment>
);

export default TweetList;