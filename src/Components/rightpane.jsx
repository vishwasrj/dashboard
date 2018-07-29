import React from 'react';
import StaticImage from './ReUsable/StaticImage.jsx';

module.exports = class Right extends React.Component{

  render(){
    return (
      <div className="rightPane">
        <div className="row">
          <div className="column">
            <StaticImage src="https://www.w3schools.com/w3images/wedding.jpg" />
          </div>
          <div className="column">
          <StaticImage src="https://www.w3schools.com/w3images/paris.jpg" />
          </div>
        </div>
      </div>
    );
  };

}
