import React from 'react';
import StaticImage from './ReUsable/StaticImage.jsx';

module.exports = class Right extends React.Component{

  render(){
    return (
      <div className="rightPane">
        <div className="row">
            <div className="column">
                <StaticImage src="https://picsum.photos/200/300/?random" />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
            </div>
            <div className="column">
                <StaticImage src="https://picsum.photos/200/300/?random" />
                <StaticImage src="https://picsum.photos/200/300/?random" />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
            </div>
            <div className="column">
                <StaticImage src="https://picsum.photos/200/300/?random" />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
            </div>
            <div className="column">
                <StaticImage src="https://picsum.photos/200/300/?random" />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
                <StaticImage src="https://picsum.photos/200/300/?random"  />
            </div>
        </div>
      </div>
    );
  };

}
