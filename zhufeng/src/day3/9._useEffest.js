import React,{useEffect,useState} from 'react';
import ReactDom from 'react-dom';
// state 是为了让函数式组件使用  setState
// useEffect 是为了让函数式组件使用钩子函数

function App() {  
    let [count,setCount] = useState(100)
    let [name,setName] = useState("珠峰")

    useEffect(()=>{   
        //类似于componentDidMount和componentDidUpdate的结合体
        // 可以通过第二个人参数来决定啥时候执行
        console.log(count);
        // console.log(name);
    },[count])

    useEffect(()=>{   
       //  个数不限制    比如想在name发生改变时触发
        console.log(name);
        // console.log(name);
    },[name])
    useEffect(()=>{   
        // 传参为空数组，表示只在初次加载时使用
     },[])
    return <div>
        hello
        <button onClick={setCount.bind(null,count+1)}>改变</button>
      <h1>{count}</h1>

      <button onClick={()=>{setName("珠峰培训")}}>改变</button>
      <h1>{name}</h1>
    </div>
}


ReactDom.render(<App/>,document.getElementById("root"))
