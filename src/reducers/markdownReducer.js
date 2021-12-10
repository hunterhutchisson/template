import { SELECTED_MARKDOWNS, EDIT_MARKDOWN_STATE, EDIT_MARKDOWN, DELETE_MARKDOWN } from "../actions/types"

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
        case EDIT_MARKDOWN_STATE:
            let newMarkdownObjStateList = [...state.markdownObjList]
            newMarkdownObjStateList.map(object=>{
                if(object.id === action.markdownObj.id){
                    return action.markdownObj.edit = !object.edit
                }
                return object
            })
            return {
                ...state,
                markdownObjList: newMarkdownObjStateList
            }
        case EDIT_MARKDOWN:
            let newMarkdownObjEditList = [...state.markdownObjList]
            let swappedObjList = newMarkdownObjEditList.map(object=>{
                if(object.id === action.markdownObj.id){
                    return action.markdownObj
                }
                return object
            })
            return {
                ...state,
                markdownObjList: swappedObjList
            }
        case DELETE_MARKDOWN:
            return {
                ...state,
                markdownObjList: state.markdownObjList.filter(obj=> obj.id !== action.markdownObj.id),
            }
        default:
            return state
    }
}

export default markdownReducer