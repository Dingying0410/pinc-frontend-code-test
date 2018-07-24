import React from 'react'
import ReactModal from 'react-modal'
import NavBar from "../Components/NavBar"
import SearchForm from "../Components/SearchForm"
import Button from "../Components/Button"
import Modal from '../Components/Modal'

var styles = require('./MainMenu.css')


class MainMenu extends React.Component{
    constructor() {
        super();
        this.state = {
            showModal: false,
            userName: "Rafael Doe",
            userImage: "https://pinc-backend.s3.amazonaws.com/images/users/avatars/000/000/897/thumb/0_avatar.jpg?1506960252"
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }



    render() {

        return (
            <div className="row main-menu">
                <NavBar />
                <SearchForm />
                <div className = "addButton">
                    <Button type = "btn-light btn-lg" value="Add Post" onClick={this.handleOpenModal} />
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                    >
                        <Modal userName={this.state.userName}/>

                    </ReactModal>
                </div>
            </div>
        );
    }
}

export default MainMenu;