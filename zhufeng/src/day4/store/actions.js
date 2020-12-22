import * as types from "./types"

export function add(n) {  
    return {type:types.ADD,num:n}
}
export function minus(n) {  
    // return {type:types.MINUS,num:n}
    return function (dispatch,getState) { 
        // console.log(getState());//取值
        // 中间件函数 
        setTimeout(()=>{
            dispatch({type:types.MINUS,num:n})
        },1000)
    }
}