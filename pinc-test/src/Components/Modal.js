import React from 'react'
import Image from './Image'
import Input from "./Input"
import Button from "./Button";

var styles = require('../Container/MainMenu.css')

const Modal = (props) => {
    const image = {
        src: "https://pinc-backend.s3.amazonaws.com/images/users/avatars/000/000/897/thumb/0_avatar.jpg?1506960252",
        alt: "image",
        width: "40px",
        height: "60px",
    }
    return (
        <div className="modal-box">
            <Image image={image}/>
            <div className="modal-box-text">
                <div className="modal-box-name">{props.userName}</div>
                <Input type = "form-control input-lg" reminder="What is your question? Make it short and simple"/>
            </div>

            <div className="modal-box-submit">
                <span className="anonymous-checkbox">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox"/>
                      <label className="form-check-label anonymous-checkbox-label" >
                        Be anonymous
                      </label>
                    </div>
                </span>
                <span className="post_btn_span">
                    <button className="post_btn" >Post</button>
                </span>


            </div>
        </div>

    );
}

export default Modal