import { combineReducers } from "redux";
import infoReducer from "./infoReducer";
import markdownReducer from './markdownReducer'
import templateReducer from './templateReducer'

let rootReducer = combineReducers({
    infoReducer: infoReducer,
    markdownReducer: markdownReducer,
    templateReducer: templateReducer
})

export default rootReducer