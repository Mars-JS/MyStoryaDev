import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
/* import * as actions from '../../actions'; */

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
        
    renderBooks() {
        return this.props.books.reverse().map(book => {
            
            return (
                
                <div className="card darken-1" key={book._id}>
                    <div className="card-content">
                        <span className="card-title">{book.title}</span>
                        <p>
                        <span className="card-title">{book._id}</span>
                        </p>
                        <p>
                            Page Count: {book.pageCount}
                        </p>
                        <p className="right">
                            Created On: {new Date(book.dateCreated).toLocaleDateString()}
                        </p>
                        <p> 
                            Genre: {book.genre} 
                        </p>
                        <p>
                            Author: {book.author}
                        </p>
                    </div>
                    <div className="card-action">
                        <a> Cover: {book.cover}</a>
                    </div>
                    <div className="fixed-action-btn" >
                        <Link to="/pages/new"
                            className="btn-floating btn-small red"
                            onClick={() => this.setState({ bookid: book._id })} >
                            <i className="material-icons">create</i>
                        </Link>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderBooks()}
            </div>
        );
    }
}

function mapStateToProps({ books }) {
    return { books };
}

export default connect(mapStateToProps, { fetchBooks })(BookList);