import { combineReducers } from "redux";
import infoReducer from "./infoReducer";
import markdownReducer from './markdownReducer'

// state.sample.-key we're accessing from state
let rootReducer = combineReducers({
    infoReducer: infoReducer,
    markdownReducer: markdownReducer
})

export default rootReducer