import {createStore,combineReducers, applyMiddleware} from "redux"
import {countReducer,colorReducer} from "./reducers"
import thunk from "redux-thunk"

// function count(state,option) { 
//     // 纯函数   函数执行没有任何副作用的函数 
//     state = state || {count:100}
//     switch (option.type) {
//         case "add":
//             return{
//                 ...state,
//                 count:state.count + 1
//             }
//         case "minus":
//             return{
//                 ...state,
//                 count:state.count - 1
//             }
//         default:
//             return state
       
//     }
// }
// 单个reducers
// let store = createStore(countReducer);


// combineReducers 可以把多个reducers合并成一个
let rootReducer = combineReducers({
    // countReducer,colorReducer
    qqq:countReducer,
    www:colorReducer
})
let store = createStore(rootReducer,applyMiddleware(thunk));


export default store