// PageFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import pageFields from './pageFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const PageFormReview = ({ onCancel, formValues, submitPage, history }) => {
    const reviewFields = _.map(pageFields, ({ name, label }) => {
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
                onClick={() => submitPage(formValues, history)}
                className="green btn-flat right white-text">
                Confirm New Page
                <i className="material-icons right">library_add</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.pageForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(PageFormReview));
