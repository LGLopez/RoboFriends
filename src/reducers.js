import { CHANGE_SEARCHFIELD } from './constants'

const initialState = {
    searchField: ''
}

//The name of the reducers should be related to the action that'll do
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type){
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}