import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBooks, fetchBooksUser, fetchBooksCinema, fetchBooksCulture, fetchBooksEducation, fetchBooksFamily, fetchBooksFashion, fetchBooksHistory, fetchBooksMusic, fetchBooksSports, fetchBooksTravel } from '../actions';
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
    this.props.fetchBooks();
    this.props.fetchBooksCinema();
    this.props.fetchBooksCulture();
    this.props.fetchBooksEducation();
    this.props.fetchBooksFamily();
    this.props.fetchBooksFashion();
    this.props.fetchBooksHistory();
    this.props.fetchBooksMusic();
    this.props.fetchBooksSports();
    this.props.fetchBooksTravel();
    this.props.fetchBooksUser();
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
            <span>title: {book.title}</span>
          </p>
          <p>
          <span>book_id: {book._id}</span>
          </p>
        </div>
      )
    });
  }

  renderBooksSports() {
    return this.props.bookssports.map(book => {
      return (
        <div key={book._id}>
          <p>
            <span>title: {book.title}</span>
          </p>
          <p>
            <span>book_id: {book._id}</span>
          </p>
        </div>
      )
    });
  }

  renderBooksMusic() {
    return this.props.booksmusic.map(book => {
      return (
        <div key={book._id}>
          <p>
            <span>title: {book.title}</span>
          </p>
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
      //temp. render bookshelf(s) -brian 02/07/2018
      <div>
        <h4>Shelf of User Stories</h4>
        {this.renderBooksUser()}
        <h4>Shelf of Sports Stories</h4>
        {this.renderBooksSports()}
        <h4>Shelf of Music Stories</h4>
        {this.renderBooksMusic()}
      </div>
    );
  }


}

function mapStateToProps({ books, booksuser, booksgenre, bookscinema, booksculture, bookseducation, booksfamily, booksFashion, bookshistory, booksmusic, bookssports, bookstravel }) {
  return { books, booksuser, booksgenre, bookscinema, booksculture, bookseducation, booksfamily, booksFashion, bookshistory, booksmusic, bookssports, bookstravel };
}

export default connect(mapStateToProps, { fetchBooksUser, fetchBooksCinema, fetchBooksCulture, fetchBooksEducation, fetchBooksFamily, fetchBooksFashion, fetchBooksHistory, fetchBooksMusic, fetchBooksSports, fetchBooksTravel, fetchBooks })(BookShelf);
