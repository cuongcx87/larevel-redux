import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import users from "../reducers/usersReducer";

class AddUserModal extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render() {
        return (
            <Modal isOpen={this.props.modalAdd} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add User</ModalHeader>
                <Form>
                    <ModalBody>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="name" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button type='button' color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.usersReducer.modalAdd);
    return {
        modalAdd: state.usersReducer.modalAdd
    }
}

export default connect(mapStateToProps, null)(AddUserModal);