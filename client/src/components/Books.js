import React from 'react';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

const Books = props => (
  <div>
  <div className="row">
  <div className="col-sm-3">
  <div>
  <Button bsStyle="info" onClick={props.click}>
    <Glyphicon glyph="chevron-left" />
  </Button>
    <img src={props.image} value={props.id} />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={props.image} value={props.id} />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={props.image} value={props.id} />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={props.image} value={props.id} />
    <Button bsStyle="info" onClick={props.click}>
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
