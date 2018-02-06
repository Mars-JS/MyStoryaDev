import React from 'react';
import { Button, Glyphicon} from 'react-bootstrap';


const Books = props => (
  <div>
  <div className="row">
  <div className="col-sm-3">
  <div>
  <Button bsStyle="info" onClick={props.click}>
    <Glyphicon glyph="chevron-left" />
  </Button>
    <img src={props.image} value={props.id} alt="alt" />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={props.image} value={props.id} alt="alt" />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={props.image} value={props.id} alt="alt" />
  </div>
  </div>
  <div className="col-sm-3">
  <div>
    <img src={props.image} value={props.id} alt="alt" />
    <Button bsStyle="info" onClick={props.click}>
      <Glyphicon glyph="chevron-right" />
    </Button>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="col-sm-12">
  <img src={require('./img/shelf11copy.png')} alt="alt" />
  </div>
  </div>
  </div>
);

export default Books;
