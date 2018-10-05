import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListUsers from './ListUsers';
import {Provider} from 'react-redux';
import store from '../store/index';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ListUsers/>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app'));
}
