import React, { Component } from "react";
import css from "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: false,
      tweetData: {},
    }
    
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() { this.setState({ activeModal: false }) }

  componentWillReceiveProps(nextProps) {
    const tweetData = nextProps.tweetData;
    if (tweetData !== this.state.tweetData) {
      this.setState({ tweetData, activeModal: true});
    }
  }

  render() {
    return (
      <div 
        onClick={ this.closeModal }
        className={css.overlay}
        style={ this.state.activeModal ? {} : { display: "none" } }
      >
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
                  @<b>{ this.state.tweetData.screen_name }</b>
                </span>
              </a>
            </div>
            <p style={{ fontSize: 27 }}>{ this.state.tweetData.text }</p>
            <span className={ css.time }>{ this.state.tweetData.date }</span>
          </div>
        </div>
      </div>
    )
  }
};

export default Modal;