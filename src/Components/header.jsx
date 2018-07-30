import React from 'react';
import Popup from './PopUp.jsx'

module.exports = class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render(){
    return (
      <div className="header">
        <div className="logo">
          <img src="./image/logo.jpg" />
        </div>
        <div className="instruction">
          <Popup />
        </div>
      </div>
    );
  }

}
