import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";

// state.sample.-key we're accessing from state
let rootReducer = combineReducers({
    sample: sampleReducer
})

export default rootReducer