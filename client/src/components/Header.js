import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import PayStorage from './PayStorage';

class Header extends Component {
    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [<li key="1"><a href="/auth/facebook"><img src={require('./img/ContinueWithFacebook2.png')} alt="Continue with facebook"/></a></li>,
                        <li key="2"><a href="/auth/google"><img src ={require('./img/ContinueWithGoogle.png')} alt="Continue with google" /></a></li>
                ];
            default:
                return [
                    <li key="5"><PayStorage /></li>,
                    <li key="6" style={{ margin: '0 10px' }}>
                        New Books Available: {this.props.auth.booksRemain}
                    </li>,
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>,
                    <li key="4"><a href="/api/profile">Profile</a></li>
                ];
        }
    }

    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                >
                        <img src={require('./img/logoM2.png')} alt="Mystorya"/>
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Header);
