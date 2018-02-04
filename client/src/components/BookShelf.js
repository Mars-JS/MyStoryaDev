import React, { Component } from "react";
import Book from "./Books";
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




  render(){
    return(
      //Render entire landing page
    );
  }



}

export default BookShelf;
