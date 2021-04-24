let initialState = {
    friends: [
        {id: 1, name: 'Boba Fett', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true'},
        {id: 2, name: 'Bo Katan', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Bo.jpg?raw=true'},
        {id: 3, name: 'Grif Carga', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Grif%20Carga.jpg?raw=true'}
    ]
}
const navBarReducer = (state = initialState, action) => {
    return state
}

export default navBarReducer;