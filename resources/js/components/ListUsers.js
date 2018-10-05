import React, {Component} from 'react';
import AddUserModal from './AddUserModal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {openAddModal} from '../actions/index';

class ListUsers extends Component{
    constructor(){
        super();
        this.state = {
            users: [],
        }
    }
    componentWillMount(){
        axios.get('/api/users').then(response => {
            this.setState({
                users: response.data.data
            })
        })
    }

    render() {
        const { actions } = this.props;
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>
                        <button onClick={actions.openAddModal}
                                className='btn btn-success'
                        >
                            <i className='fa fa-plus'></i>
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning mr-3"><i className='fa fa-edit'></i></button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <AddUserModal/>
            </table>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(openAddModal, dispatch)
    }
}

export default connect(mapDispatchToProps)(ListUsers);