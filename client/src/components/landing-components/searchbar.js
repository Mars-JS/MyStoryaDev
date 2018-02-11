import React from 'react';
import {Jumbotron, Glyphicon} from 'react-bootstrap';

const Search = () => {
  return(
    <Jumbotron>
    <form>
        <div className="form-group has-feedback">
        <input type="text" class="form-control" id="search" placeholder="Search Mystorya"/>
        <i className="glyphicon glyphicon-search form-control-feedback"></i>
        </div>
      </form>
    </Jumbotron>
  );
}

export default Search;
