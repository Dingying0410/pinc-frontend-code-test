import React, { Component } from 'react';
import './App.css';

import MainMenu from './Container/MainMenu'
import QuestionList from "./Container/QuestionList";

const App = () => (
    <div className="container-fluid">
        <MainMenu/>
        <QuestionList/>
    </div>
);
export default App;
