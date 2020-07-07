import {applyMiddleware, combineReducers, createStore} from "redux";
import myPageReducer from "./myPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
        myPage: myPageReducer,
        dialogs: dialogsPageReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    });



let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
