import React from 'react';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

const Books = props => (
  <div>
  <div className="row">
  <div className="col-sm-3">
  <div>
  <Button bsStyle="info" onClick={props.clickleft}>
    <Glyphicon glyph="chevron-left" />
  </Button>
    <img src={require("./img/book copy.jpg")} value={props.id1} />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={require("./img/book copy.jpg")} value={props.id2} />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={require("./img/book copy.jpg")} value={props.id3} />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={require("./img/book copy.jpg")} value={props.id4} />
    <Button bsStyle="info" onClick={props.clickright}>
      <Glyphicon glyph="chevron-right" />
    </Button>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="col-sm-12">
  <img src={require('./img/shelf11copy.png')} />
  </div>
  </div>
  </div>
);

export default Books;
