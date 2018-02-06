import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBooks, fetchBooksUser } from '../actions'
/* import Books from "./Books"; */

class BookShelf extends Component {

  state = {
    mybooks: [],
    popularbooks: [],
    sports: [],
    travel: [],
    history: [],
    culture: [],
    music: [],
    education: [],
    fashion: [],
    family: [],
    cinema: []

  };

  componentDidMount() {
    this.props.fetchBooksUser();
    this.props.fetchBooks();
    this.loadResults();
}

  componentDidUpdate() {
    if(!this.state.books || !this.state.popularbooks){
        this.loadResults();
    }
  }


  loadResults = () => {
    //loading books function
  };


  renderBooksUser(){
    return this.props.books.map(book => {
      return(
        <div key={book._id}>
          <p>
          <span>book_id: {book._id}</span>
          </p>
        </div>
      )
    });
  }

  render(){
    return(
      //Render entire landing page
      <div>
        {this.renderBooksUser()}
      </div>
    );
  }


}

function mapStateToProps({books}) {
  return { books };
}

export default connect(mapStateToProps, { fetchBooksUser, fetchBooks })(BookShelf);
