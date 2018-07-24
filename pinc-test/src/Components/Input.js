import React from 'react'

const Input = (props) => {

    return (

        <div className="form-group">
            <input className={props.type}  type="text" placeholder={props.reminder}/>
        </div>
    );
}

export default Input