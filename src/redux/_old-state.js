//все закоментировано
/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likesCount: 100, message: 'My first post!'},
            ],
            newPostText: 'Hello Roma!',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Boba', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true'},
                {id: 2, name: 'Bo', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Bo.jpg?raw=true'},
                {id: 3, name: 'Grif', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Grif%20Carga.jpg?raw=true'},
                {id: 4, name: 'Grogo', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Grogo.jpg?raw=true'},
                {id: 5, name: 'Cara', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Cara.jpg?raw=true'},
                {id: 6, name: 'Gideon', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Moff.jpg?raw=true'},
            ],
            messages: [

            ],
            newMessageText: "",
        },
        navBarPage: {
            friends: [
                {id: 1, name: 'Boba Fett', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true'},
                {id: 2, name: 'Bo Katan', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Bo.jpg?raw=true'},
                {id: 3, name: 'Grif Carga', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Grif%20Carga.jpg?raw=true'}
            ]
        }

    },
    _callSubscriber () {
        console.log('state changed')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBarPage = navBarReducer(this._state.navBarPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;

window.store = store;*/
