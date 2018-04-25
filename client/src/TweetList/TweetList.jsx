import React from "react";
import css from "./tweetlist.css";
import moment from "moment";

const TweetList = ({ tweets, handleTweetClick }) => (
  <React.Fragment>
    {
      tweets.map(({ text, created_at, user }, index) => {
        const { 
          name, 
          profile_image_url_https,
          screen_name 
        } = user;

        const date = moment(created_at).startOf("day").fromNow();
        const profileImage = profile_image_url_https;

        const tweetData = { text, date, name, profileImage, screen_name }

        return (
          <li className={ css.stream_item } onClick={ () => { handleTweetClick(tweetData) } }>
            <div className={ css.tweet }>
              <div className={ css.stream_item_header }>
                <a href="https://twitter.com/iamjohnoliver">
                  <img 
                    className={ css.avatar }
                    src={profileImage} alt="Profile Image"
                  />
                </a>
                <div className={ css.account_group }>
                  <a href="https://twitter.com/iamjohnoliver">
                    <strong className={ css.fullname }>{ name }</strong>
                  </a>
                  <a href="https://twitter.com/iamjohnoliver">
                    <span className={ css.username }>
                      @<b>{ screen_name }</b>
                    </span>
                  </a>
                </div>
                <span className={ css.time }>{ date }</span>
              </div>
              <p className={ css.tweet_text }>{ text }</p>
            </div>
          </li>
        )
      })
    }
  </React.Fragment>
);

export default TweetList;