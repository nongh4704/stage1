import {combineReducers} from "redux";
import signup from "./signupReducer";
import flashMessage from "./flashMessage";

const rootReducers = combineReducers({
    signup,
    flashMessage
});

export default rootReducers;