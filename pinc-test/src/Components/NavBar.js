import React from 'react';
import {Nav} from "react-bootstrap"

var styles = require('./../Container/MainMenu.css')

var NavBar = () => {
    return (
        <Nav className = "nav-bar" >
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

export default NavBar;