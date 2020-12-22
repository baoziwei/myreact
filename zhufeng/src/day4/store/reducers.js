
import * as types from "./types"
export function countReducer(state,option) { 
    // 纯函数   函数执行没有任何副作用的函数 
    state = state || {count:100}
    switch (option.type) {
        case types.ADD:
            return{
                ...state,
                count:state.count + option.num
            }
        case types.MINUS:
            return{
                ...state,
                count:state.count - option.num
            }
        default:
            return state
       
    }
}

export function colorReducer(state,option) { 
    // 纯函数   函数执行没有任何副作用的函数 
    state = state || {color:"red"}
    switch (option.type) {
        case types.CHANGE_COLOR:
            return{
                ...state,
                color:option.col
            }
        default:
            return {
                ...state
            }
       
    }
}



