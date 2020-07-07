const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Igor'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'HASAGI'},
        {id: 3, message: 'FAITH IS MY SHIELD'},
        {id: 4, message: 'HASAYO'}
    ],
    newMessageBody: ''
};


const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newBody
            }
        }
        case ADD_MESSAGE: {

            let newMessage = {
                id: 10,
                message: state.newMessageBody
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        }

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: body})

export default dialogsPageReducer;
