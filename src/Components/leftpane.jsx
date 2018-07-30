import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Transformer } from 'react-konva';
import Konva from 'konva';
import DraggedImage from './ReUsable/CanvasImage.jsx';


module.exports =  class Left extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      canvasheight: 0,
      canvaswidth: 0,
      canvasimage: []
    }
  }

  deleteElement = ev => {
    console.log(ev);
      let layer = ev.target.getLayer();
      if(layer){
       ev.target.destroy();
       console.log(this.stage._stage.find('Transformer'));
       this.stage._stage.find('Transformer').destroy();
       layer.batchDraw();
      }
      console.log(ev.target.attrs.datakey);
      this.setState({
        canvasimage: this.state.canvasimage.filter((_, i) => i !== ev.target.attrs.datakey)
      });
  }

  handleStageClick = e => {
    console.log(e);
    // if click on empty area - remove all transformers
      if (e.target === this.stage._stage) {
        this.stage._stage.find('Transformer').destroy();
        this.layer.draw();
        return;
      }
      // do nothing if clicked NOT on our image
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

  componentDidMount(){
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({ canvasheight: height, canvaswidth: width });
  }

 OnDrop = (ev)=>{
  var data = {
     src : ev.dataTransfer.getData("src_text"),
     x : ev.clientX > 0 ? ev.clientX-5 : 0,
     y : ev.clientY > 0 ? ev.clientY-30 : 0
   }
   this.setState({
         canvasimage: [...this.state.canvasimage, data]
     }
   );
 }

  render(){
    const { src, point, canvasheight, canvaswidth} = this.state;
    return (
      <div className="leftPane" ref={ (divElement) => this.divElement = divElement} onDrop={this.OnDrop} onDragOver={ (ev) => { ev.preventDefault(); }} >
        <span style={{'fontSize': '50px', 'position': 'absolute', 'top': '370px', 'left': '240px', 'opacity': 0.2}}>Drop Here!</span>
        <Stage ref={ (stage) => this.stage = stage } width={ canvaswidth } height={ canvasheight } onClick={this.handleStageClick}>
          <Layer ref={ (layer) => this.layer = layer }>
            {
              this.state.canvasimage ?
              this.state.canvasimage.map((data, index) => {
                return (
                  <DraggedImage delete={this.deleteElement} key={ index } datakey={ index } name='image' data={ data }/>
                );
              }) : null
            }
          </Layer>
        </Stage>
      </div>
    );
  }

}
