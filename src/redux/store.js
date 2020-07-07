import myPageReducer from "./myPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        messagesPage: {
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
        },

        myPage: {
            posts: [
                {id: 1, message: 'First Post!', likesCount: 12},
                {id: 2, message: 'Second Post?', likesCount: 11}
            ],
            newPostText: ''
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Sveta'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Yana'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State rerender');
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.myPage = myPageReducer(this._state.myPage, action);
        this._state.messagesPage = dialogsPageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
