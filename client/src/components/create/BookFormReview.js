// BookFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import bookFields from './bookFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const BookFormReview = ({ onCancel, formValues, submitBook, history }) => {
    const reviewFields = _.map(bookFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitBook(formValues, history)}
                className="green btn-flat right white-text">
                Confirm New Book
                <i className="material-icons right">library_add</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.bookForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(BookFormReview));