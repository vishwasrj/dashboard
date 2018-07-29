import React from 'react';
import { Stage, Layer, Transformer } from 'react-konva';

module.exports = class TransformerComponent extends React.Component {
  // state = {
  //   changed: false
  // }
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate(){
    this.checkNode();
  }

  checkNode() {
    const transformer = this.transformer;
    const stage = transformer.getStage();
    const { selectedShapeName } = this.props;
    const selectedNode = stage.findOne('.' + selectedShapeName);
    console.log('*******');
    console.log(selectedNode)
    console.log(transformer.node());
    console.log('*******');
    console.log(selectedNode === transformer.node());
    if (selectedNode === transformer.node()) {
      return;
    }
    if (selectedNode) {
      transformer.attachTo(selectedNode);
    } else {
      transformer.detach();
    }
    console.log(transformer);
    transformer.getLayer().batchDraw();
  }

  render() {
    return (
      <Transformer
        ref={ node => {
          this.transformer = node;
        }}
      />
    );
  }
}
