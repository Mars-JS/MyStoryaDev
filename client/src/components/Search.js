import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const Search = props => (
  <div>
    <Jumbotron>
    <form>
      <div class="form-group">
      <input class="form-control" id="Serch" aria-describedby="emailHelp" placeholder="Search" />
      </div>
    </form>
    </Jumbotron>
  </div>
);

export default Search;
