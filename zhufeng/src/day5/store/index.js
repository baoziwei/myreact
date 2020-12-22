import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {todoRefucer} from "./reducers"

let rootReducer = combineReducers({
    todo: todoRefucer
})

let store = createStore(rootReducer, applyMiddleware(thunk))
export default store