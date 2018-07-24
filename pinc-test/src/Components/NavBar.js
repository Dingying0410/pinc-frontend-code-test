import React from 'react';
import {Nav} from "react-bootstrap"

var styles = require('./NavBar.css')

class NavBar extends React.Component {
    render() {
        return (
            <Nav className = "nav-bar" bsStyle="pills" >
                <a href="#">
                    Feed
                </a>
                <a href="#">
                    Groups
                </a>
                <a href="#">
                    Activity
                </a>
            </Nav>
        );
    }
}


export default NavBar;