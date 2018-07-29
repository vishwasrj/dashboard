import React from 'react';

module.exports = class Header extends React.Component{

  render(){
    return (
      <div className="header">
        <div className="logo" style={{ width: '196px', height: '70px' }}>
          <img src="./image/logo.jpg" />
        </div>
      </div>
    );
  }

}
