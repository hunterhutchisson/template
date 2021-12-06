import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import infoReducer from "./infoReducer";

// state.sample.-key we're accessing from state
let rootReducer = combineReducers({
    sample: sampleReducer,
    infoReducer: infoReducer
})

export default rootReducer