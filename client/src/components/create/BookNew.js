// BookNew shows user BookForm and BookFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BookForm from './BookForm';
import BookFormReview from './BookFormReview';

class BookNew extends Component {
    state = { showBookReview: false };

    renderContent() {
        if (this.state.showBookReview) {
            return <BookFormReview
                onCancel={() => this.setState({ showBookReview: false })}
            />;
        }

        return <BookForm onBookSubmit={() => this.setState({ showBookReview: true })} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }

}

export default reduxForm({
    form: 'bookForm'
})(BookNew);