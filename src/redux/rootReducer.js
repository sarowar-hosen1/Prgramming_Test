import {combineReducers} from "redux";
import spaceXReducer from "./spaceX/spaceXReducer";

export const rootReducer = combineReducers({
    spaceX:spaceXReducer
})
