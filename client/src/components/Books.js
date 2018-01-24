import React from 'react';
import {Button} from 'react-bootstrap';

const Books = props => (
  <div className="row">
  <Button bsStyle="info" onClick={props.click}>1</Button>
  <div>
    <img src={props.image} value={props.id} />
  </div>
  <div>
    <img src={props.image} value={props.id} />
  </div>
  <div>
    <img src={props.image} value={props.id} />
  </div>
  <div>
    <img src={props.image} value={props.id} />
  </div>
  <div>
    <img src={props.image} value={props.id} />
  </div>
  <Button bsStyle="info" onClick={props.click}>1</Button>
  </div>
);

export default Books;
