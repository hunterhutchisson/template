import { SELECTED_MARKDOWNS } from "../actions/types"

const initialState = {
    markdownObjList: []
}

const markdownReducer = (state=initialState, action) => {
    switch(action.type){
        case SELECTED_MARKDOWNS:
            return {
                ...state,
                markdownObjList: [...state.markdownObjList, action.data]
            }
        default:
            return state
    }
}

export default markdownReducer