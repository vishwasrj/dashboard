import React, { Component } from 'react';
import { render } from 'react-dom';
import { Image } from 'react-konva';
import konva from 'konva';

module.exports = class CanvasImage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      x: 0,
      y: 0
    };
    this.onSrcRecieved(this.props);
  }

  onSrcRecieved = (obj) => {
    const image = new window.Image();
    image.src = obj.src;
    image.width = 150;
    image.height = 120;
    image.onload = () => {
      this.setState({
            image: image,
            x: obj.pointx-100 < 0 ? 0 : obj.pointx-100,
            y: obj.pointy-100 < 0 ? 0 : obj.pointy-100,
            name: obj.name.split('/').pop()
      });
    };
  }


  handleDragEnd = e => {
    console.log(e.target.x());
    this.setState({
      x: e.target.x(),
      y: e.target.y()
    });
  };

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.x === nextState.x && this.state.y === nextState.y){
      return false;
    }else{
      return true;
    }
  }


  render() {
    return <Image ondblclick={this.props.delete} onDragEnd={this.handleDragEnd} name={this.state.name} image={this.state.image} x={this.state.x} y={this.state.y} draggable />;
  }
}
