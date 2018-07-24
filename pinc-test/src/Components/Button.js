import React from 'react'

const Button = (props) => {
    var type = props.type
    return (
        <button type="button" className={"btn " +type} onClick={props.onClick} >{props.value}</button>
    );
}

export default Button