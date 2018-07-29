import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Transformer } from 'react-konva';
import Konva from 'konva';
import DraggedImage from './reusable/image.jsx';
import TransformerComponent from './Transformer.jsx';


module.exports =  class Left extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      canvasheight: 0,
      canvaswidth: 0,
      src: [],
      point: {
        x : 0,
        y : 0
      }
    }
  }

  handleStageClick = e => {
    // if click on empty area - remove all transformers
      if (e.target === this.stage._stage) {
        this.stage._stage.find('Transformer').destroy();
        this.layer.draw();
        return;
      }
      // do nothing if clicked NOT on our rectangles
      if (!e.target.hasName('image')) {
        return;
      }
      // remove old transformers
      // TODO: we can skip it if current rect is already selected
      this.stage._stage.find('Transformer').destroy();

      // create new transformer
      var tr = new Konva.Transformer();
      this.layer.add(tr);
      tr.attachTo(e.target);
      this.layer.draw();
  };

  updateTransformData = (x, y) => {
    this.setState({
      point : {
        x : x,
        y : y
      }
    });
  }

  componentDidMount(){
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({ canvasheight: height, canvaswidth: width });
  }

 OnDrop = (ev)=>{
   var data = ev.dataTransfer.getData("src_text");
   this.setState(
       {
         src: [...this.state.src, data],
         point: {
           x: ev.clientX > 0 ? ev.clientX : 0,
           y: ev.clientY > 0 ? ev.clientY : 0
         }
       }
   );
   ev.preventDefault();
 }

 deleteElement = ev => {
     let layer = ev.target.getLayer();
     if(layer){
      ev.target.destroy();
      this.stage._stage.find('Transformer').destroy();
      layer.batchDraw();
     }
 }

  render(){
    const { src, point, canvasheight, canvaswidth} = this.state;
    return (
      <div className="leftPane" ref={ (divElement) => this.divElement = divElement} onDrop={this.OnDrop} onDragOver={ (ev) => { ev.preventDefault(); }} >
        <Stage ref={ (stage) => this.stage = stage } width={ canvaswidth } height={ canvasheight } onClick={this.handleStageClick} >
          <Layer ref={ (layer) => this.layer = layer }>
            {
              this.state.src ?
              this.state.src.map((data, index) => {
                return (
                  <DraggedImage delete={this.deleteElement} key={ index } name='image' src={ data } pointx={ point.x } pointy={ point.y }/>
                );
              }) : null
            }
          </Layer>
        </Stage>
      </div>
    );
  }

}
