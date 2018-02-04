import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import SurveyList from './surveys/SurveyList';
import BookList from './create/BookList';

const Dashboard = () => {
    return (
        <div>
            <BookList />
            <div className="fixed-action-button">
                <Link to="/books/new" className="btn-floating btn-large red">
                    <i className="material-icons">add_circle</i>
                </Link>
            </div>
            <SurveyList />
            <div className="fixed-action-button">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add_circle</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
