import React, {Component} from 'react'
import Input from './Input'

var styles = require('../Container/MainMenu.css')

const SearchForm = () => {
    return (
        <form className="form-inline searchForm">
            <Input type = "form-control-lg input-lg ml3" reminder="Search"/>
        </form>
    );
}

export default SearchForm