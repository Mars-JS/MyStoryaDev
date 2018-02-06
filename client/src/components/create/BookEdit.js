import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PageList from './PageList';
import PageNew from './PageNew';
import BookList from './BookList';

const updateCover = 'Update the cover art and title of your story'

class BookEdit extends Component {
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
                <Tab eventKey={1} title="Cover & Title">{updateCover}</Tab>
                <Tab eventKey={2} title="Edit previous pages"><PageList /></Tab>
                <Tab eventKey={3} title="Continue Writing" ><PageNew /></Tab>
                <Tab eventKey={4} title="My Stories"><BookList /></Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        this.setState({
            activeTab: selectedTab
        });
    }
}

export default BookEdit;
