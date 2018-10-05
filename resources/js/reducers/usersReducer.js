import * as actionTypes from '../actions/actionTypes';

const initalState = {
    modalAdd: false
}

export default function usersReducer(state = initalState, action){
    switch (action.type) {
        case actionTypes.OPEN_ADD_MODAL:
            return {
                modalAdd: true
            };
        case actionTypes.CLOSE_ADD_MODAL:
            return {
                modalAdd: false
            };
        default:
            console.log(state);
            return state;
    }
}