import { EDIT_MARKDOWN_STATE_TEMPLATE, EDIT_MARKDOWN_TEMPLATE, DELETE_MARKDOWN_TEMPLATE, LOAD_TEMPLATE } from "../actions/types"
import templateList from "../assets/data"

const initialState = {
    templateObjList: templateList
}

const markdownReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_TEMPLATE:
            return {
                ...state,
                templateObjList: [...state.templateObjList, ...action.data]
            }
        case EDIT_MARKDOWN_STATE_TEMPLATE:
            let newTemplateObjStateList = [...state.templateObjList]
            newTemplateObjStateList.map(object=>{
                if(object.id === action.markdownObj.id){
                    action.markdownObj.edit = !object.edit
                }
            })
            return {
                ...state,
                templateObjList: newTemplateObjStateList
            }
        case EDIT_MARKDOWN_TEMPLATE:
            let newMarkdownObjEditList = [...state.templateObjList]
            let swappedObjList = newMarkdownObjEditList.map(object=>{
                if(object.id === action.markdownObj.id){
                    return action.markdownObj
                }
                return object
            })
            return {
                ...state,
                templateObjList: swappedObjList
            }
        case DELETE_MARKDOWN_TEMPLATE:
            return {
                ...state,
                templateObjList: state.templateObjList.filter(obj=> obj.id !== action.markdownObj.id),
            }
        default:
            return state
    }
}

export default markdownReducer