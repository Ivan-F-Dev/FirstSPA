const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Boba', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true'},
        {id: 2, name: 'Bo', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Bo.jpg?raw=true'},
        {id: 3, name: 'Grif', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Grif%20Carga.jpg?raw=true'},
        {id: 4, name: 'Grogo', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Grogo.jpg?raw=true'},
        {id: 5, name: 'Cara', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Cara.jpg?raw=true'},
        {id: 6, name: 'Gideon', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Moff.jpg?raw=true'},
    ],
    messages: [],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = action.newMessageText
            return {...state, messages: [...state.messages, {id: 2, message: messageText}],}
        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;