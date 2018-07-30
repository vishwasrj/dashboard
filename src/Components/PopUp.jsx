import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button className="button"> Instruction </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Instruction </div>
        <div className="content">
          {" "}
            Left Hand Pane (LHP) is canvas Pane. <br />
            Right Hand Pane (RHP) is Thumbnail Pane. <br />
            Drag and drop from right to left pane. <br />
            Click on the image at LHP to resize and rotate. <br />
            DoubleClick on the image at LHP to delete it. <br />
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}>
            Close Instruction
          </button>
      </div>
      </div>
    )}
  </Popup>
);
