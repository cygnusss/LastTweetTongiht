import React, { Component } from "react";
import css from "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetData: { // All props are initially undefined to avoid errors
        profileImage: undefined,
        name: undefined,
        screen_name: undefined,
        text: undefined,
        date: undefined,
        clicked: false, // Shows/Hides the modal
      },
    }
    
    this.closeModal = this.closeModal.bind(this);
  }

  // When the closeModal event triggers it updates the state
  // and toggles the clicked prop to hide the component
  closeModal() {
    // Switch helps avoid the issue when if the same tweet is clicked twice 
    // it won't open a modal the second time
    const newTweetData = { ...this.state.tweetData, clicked: false };
    this.setState({ tweetData: newTweetData });
    this.props.handleTweetClick(newTweetData);
  }

  // Listens to whenever new data is passed into the props
  // Modal should pop up if the data is different from that in the state
  componentWillReceiveProps(nextProps) {
    const tweetData = nextProps.tweetData;
    if (JSON.stringify(tweetData) !== JSON.stringify(this.state.tweetData)) {
      this.setState({ tweetData });
    }
  }

  render() {
    return (
      <div
        className={ css.modal_overlay_container }
        style={ this.state.tweetData.clicked ? {} : { display: "none" } }
      >
        <div onClick={ this.closeModal } className={ css.overlay }></div>
        <div className={css.modal}>
          <div className={css.modal_content}>
            <a href="https://twitter.com/iamjohnoliver">
              <img 
                className={ css.avatar }
                src={ this.state.tweetData.profileImage } alt="Profile Image"
              />
            </a>
            <div className={ css.account_group }>
              <a href="https://twitter.com/iamjohnoliver">
                <strong className={ css.fullname }>{ this.state.tweetData.name }</strong>
              </a>
              <a href="https://twitter.com/iamjohnoliver">
                <span className={ css.username }>
                  @<b style={{ fontWeight: "normal" }} >{ this.state.tweetData.screen_name }</b>
                </span>
              </a>
            </div>
            <div className={ css.tweet_text }>{ this.state.tweetData.text }</div>
            <span className={ css.time }>{ this.state.tweetData.date }</span>
          </div>
        </div>
      </div>
    )
  }
};

export default Modal;