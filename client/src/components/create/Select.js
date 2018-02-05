import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import BookList from './BookList';
import Profile from './../Profile';
import { Link } from 'react-router-dom';

class Select extends Component {
    constructor(props) {
        super();
        this.state = {
            activeTab: props.activeTab || 1,
         };
        
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Profile"><Profile /></Tab>
                <Tab eventKey={2} title="My Stories"> 
                    <div className="fixed-action-btn" >
                        <Link to="/pages/new"
                            className="btn-floating btn-small red" >
                            <i className="material-icons">create</i>
                        </Link>
                    </div>
                </Tab>
                <Tab eventKey={3} title="My Friends Stories" >Friends Content</Tab>
                <Tab eventKey={4} title="Tab 4">Tab 4 content</Tab>
                <Tab eventKey={5} title="Tab 5">Tab 5 content</Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        this.setState({
            activeTab: selectedTab
        });
    }
    
}

export default Select;
