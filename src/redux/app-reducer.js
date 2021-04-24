import {getAuthData} from "./auth-reducer";


const INITIALLIZED_SUCCESS = 'INITIALLIZED_SUCCESS'


let initialState = {
    initiallized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALLIZED_SUCCESS:
            return {
                ...state, initiallized: true
            }
        default:
            return state
    }
}

export const initiallizedSuccess = () => ({type: INITIALLIZED_SUCCESS})
export const initiallizeApp = () => (dispatch) => {
    let promise = dispatch(getAuthData())
    //dispatch(somethingElse())
    //dispatch(somethingElse())
    //dispatch(somethingElse())
    Promise.all([promise])
        .then(() => {
            dispatch(initiallizedSuccess());
        })
}

export default appReducer