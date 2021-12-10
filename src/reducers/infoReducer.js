import { LOAD_MARKDOWNS_BASIC, LOAD_MARKDOWNS_CHEAT, SWITCH_OVERALL_FORM } from "../actions/types"

const initialState = {
    basicList: [],
    cheatList: [],
    overallFormState: null
}

const infoReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_MARKDOWNS_BASIC:
            let basicCopy = [...action.basicList]
            let newList = basicCopy.filter(item=>{
                return (item.name !== "Bold" && item.name !== "Italic")
            })
            return {
                ...state,
                basicList: newList
            }
        case LOAD_MARKDOWNS_CHEAT:
            return {
                ...state,
                cheatList: state.cheatList.concat(action.cheatList)
            }
        case SWITCH_OVERALL_FORM:
            return {
                ...state, 
                overallFormState: action.overallFormState
            }
        default:
            return state
    }
}

export default infoReducer