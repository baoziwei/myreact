import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';

// function组件（函数是组件   静态组件）

// 更新比较少使用函数是组件    多的话用类组件
/* function App (){
    let [count,setCount] = useState(10);
    let [name,setName] = useState("珠峰")
    function add(){
        let t = count + 100
        setCount(t)   //更新count   并且触发视图更新 {setState({count:t})}
        // console.log(count);
    }
    return <div>
       <button onClick={add}>+</button>

       <button onClick={()=>{setName("啦啦啦啦")}}>+</button>
       {count}
       {name}
    </div>
} */

function App (){
    let [state,setState] = useState({
        count:100,
        name:"珠峰"
    })
    function add(){
       let t = state.count+10
       let obj= {
            ...state,
            count:t
        }
       setState(obj)
    }
    function miuns(){
        let t = state.count-10
        setState({
            ...state,
            count:t
        })
    }
    function setName11(){
        setState({
            ...state,
           name:"哈哈哈"
       })
    }
    return <div>
       <button onClick={add}>+</button>
       <button onClick={miuns}>---</button>

       <button onClick={setName11}>+</button>
       {state.count}
       {state.name}
    </div>
}

ReactDom.render(<App/>,document.getElementById("root"))
