import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import SurveyList from './surveys/SurveyList';
import BookList from './create/BookList';
import BookEdit from './create/BookEdit';

class Dashboard extends Component {

    constructor() {
        super();

        this.state = { active: false }
    }

    toggleMenu = () => {

        // function that will toggle active/false
        this.setState((prevState) => {
            active: !prevState.active
        });
    }


    render() {
        return (
            <div>
                <BookEdit active={this.state.active} onClick={this.toggleMenu} />
                <MenuOverlay active={this.state.active} />
            </div>
        )
    }
}


export default Dashboard;

let { ButtonToolbar, Button, FormGroup, ControlLabel, FormControl } = ReactBootstrap;

class SelectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: '' };
    }

    onPickColor(e) {
        console.log('[onPickColor]', this.inputEl)
        this.setState({ color: this.inputEl.value });
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl
                        onChange={this.onPickColor.bind(this)}
                        inputRef={el => this.inputEl = el}
                        componentClass="select" placeholder="select">
                        <option value="">select</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </FormControl>
                </FormGroup>
            </div>
        )
    }
}


let { Tab, Tabs } = ReactBootstrap;

class MyComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                <Tab eventKey={4} title="Tab 4">Tab 4 content is displayed by default</Tab>
                <Tab eventKey={5} title="Tab 5">Tab 5 content</Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }
}

ReactDOM.render(
    <MyComponent activeTab={4} />,
    document.getElementsByClassName('container')[0]
);