import React from 'react';
import ReactDom from 'react-dom';
import store from "./store/index"
import Com1 from "../components/com11"

console.log(store);

class App extends React.Component{
    add=()=>{
      store.dispatch({
          type:"ADD",   //这个add就是对应的switch里定义的名字
          num:5
      })
      console.log(store.getState());
    }
    minus=()=>{
        store.dispatch({
            type:"MINUS",   //这个add就是对应的switch里定义的名字
            num:5 
        })
    }
    componentDidMount(){
        // 把这个回调函数，当道某个事件池中
        // 事件池中的函数会在数据更新后默认执行
        store.subscribe(()=>{
            // this.setState({})   //更新视图
        })
    }
    render(){
       return <div className=''>
           <button onClick={this.add}>+++</button>
           <button onClick={this.minus}>---</button>
           {store.getState().count}
           <Com1/>

       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))
