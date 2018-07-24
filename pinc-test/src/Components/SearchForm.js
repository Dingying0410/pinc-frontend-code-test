import React, {Component} from 'react'
import Input from './Input'

var styles = require('../Container/MainMenu.css')
class SearchForm extends Component {
    render() {
        return (
            <form className="form-inline searchForm">
                <Input type = "form-control-lg input-lg ml3" reminder="Search"/>
            </form>
        );
    }
}

export default SearchForm