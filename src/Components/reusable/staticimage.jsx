import React from 'react';

module.exports = class StaticImage extends React.Component{

  render(){
    return (
      <img style={{width:'150px', height:'120px'}} src={this.props.src} onDragStart={ (ev) => { ev.dataTransfer.setData( "src_text", ev.target.src) }} draggable/>
    );
  }

}
