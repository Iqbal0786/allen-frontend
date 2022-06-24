import { createStore } from "redux";
import thunk from "redux-thunk"
import { applyMiddleware  } from "redux";
import { combineReducers } from "redux";
import { LogReducer } from "./LogInRedux/LogReducer";
import { OptionReducer } from "./OptionsRedux/OpionsReducer";
const rootReducer= combineReducers({
    options:OptionReducer,
    logInData:LogReducer
})
export const store= createStore(rootReducer, applyMiddleware(thunk));