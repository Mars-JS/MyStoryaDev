// BookForm displays form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import BookField from './BookField';
import bookFields from './bookFields';

class BookForm extends Component {
    renderFields() {
        return _.map(bookFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={BookField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onBookSubmit)}>
                    {this.renderFields()}
                    <Link to="/books" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat white-text" >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    /* errors.synopsis = validate(values.synopsis || ''); */

    _.each(bookFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'bookForm',
    destroyOnUnmount: false
})(BookForm);