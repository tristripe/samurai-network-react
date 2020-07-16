const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};


const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage} ]
            }
        }

        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsPageReducer;
