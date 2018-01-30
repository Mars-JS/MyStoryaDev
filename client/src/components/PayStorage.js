import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PayStorage extends Component {
    render() {
        return(
            <StripeCheckout 
                name="Mystorya"
                description="$5 for 10 blank books"
                amount={500}
                token={token => this.props.handleTokenBooks(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Purchase more storage
                     <i className="material-icons">payment</i>
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(PayStorage);
