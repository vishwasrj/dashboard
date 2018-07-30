import React, { Component } from 'react';
import { render } from 'react-dom';
import { Image } from 'react-konva';
import konva from 'konva';
import path from 'path';

module.exports = class CanvasImage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
    };
    this.onSrcRecieved(this.props);
  }

  onSrcRecieved = (obj) => {
    const image = new window.Image();
    image.src = '/image/trash.png';
    image.width = 20;
    image.height = 20;
    image.onload = () => {
      this.setState({
            image: image
      });
    };
  }



  render() {
    return <Image name="trash" image={this.state.image} x='30' y='30' />;
  }
}
