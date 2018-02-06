//PageNew shows user PageForm and PageFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PageForm from './PageForm';
import PageFormReview from './PageFormReview';
/* import BookList from './BookList'; */
import BookCurrent from './BookCurrent';

class PageNew extends Component {
    state = { showPageReview: false };
        
renderContent(){
    if (this.state.showPageReview) {
        return (<PageFormReview 
            onCancel={() => this.setState({ showPageReview: false })}
        />);
    }

    return (<PageForm 
        onPageSubmit={() => this.setState({ showPageReview: true })}
     />);
}

    render() {
        return(
            <div>
                <BookCurrent />
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({ form: 'pageForm' })(PageNew);