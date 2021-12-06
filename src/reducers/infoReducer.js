import { LOAD_MARKDOWNS_BASIC, LOAD_MARKDOWNS_CHEAT } from "../actions/types"

const initialState = {
    basicList: [],
    cheatList: []
}

const infoReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_MARKDOWNS_BASIC:
            return {
                ...state,
                basicList: state.basicList.concat(action.basicList)
            }
        case LOAD_MARKDOWNS_CHEAT:
            return {
                ...state,
                cheatList: state.cheatList.concat(action.cheatList)
            }
        default:
            return state
    }
}

export default infoReducer