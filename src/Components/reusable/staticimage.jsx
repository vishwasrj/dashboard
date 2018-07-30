import React from 'react';
import axios from 'axios';

module.exports = class StaticImage extends React.Component{
  state = {
    src: this.props.src
  }

 componentDidMount(){
     axios.get(this.props.src)
      .then((success) => {
        this.setState({
          src: success.request.responseURL
        });
      });
  }

  render(){
    return (
      <img style={{width:'155px', height:'113px'}} src={this.state.src} onDragStart={ (ev) => { ev.dataTransfer.setData( "src_text", ev.target.src) }} draggable/>
    );
  }

}
