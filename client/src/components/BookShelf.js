import React, { Component } from "react";

class BookShelf extends Component {

  state = {
    books: [],
    popularbooks: [],

  };

  componentDidMount() {
    this.loadResults();
}

  componentDidUpdate() {
    if(!this.state.skills){
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
