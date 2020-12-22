import React from 'react';
import ReactDom from 'react-dom';
import {Provider,connect} from "react-redux"
import store from "./store/index"
import Com2 from "./components/com22"
import {add,minus} from "./store/actions"

class App extends React.Component{
    add=()=>{
        // this.props.dispatch({
        //     type:"ADD",   //这个add就是对应的switch里定义的名字
        //     num:100
        // })
        this.props.dispatch(add(1))
        this.props.dispatch({
            type:"CHANGE_COLOR",   //这个add就是对应的switch里定义的名字
            col:"blue"
        })
        // console.log(99999,store.getState());
      }
    minus=()=>{
        this.props.dispatch(minus(1))
        // this.props.dispatch({
        //     type:"MINUS",   //这个add就是对应的switch里定义的名字
        //     num:500
        // })
          this.props.dispatch({
            type:"CHANGE_COLOR",   //这个add就是对应的switch里定义的名字
            col:"pink"
        })
      }
    render(){
        console.log(999,this);
        let {count,add,minus} = this.props
       return <div className=''>

           <button onClick={this.add}>+++</button>
           <button onClick={this.minus}>---</button>

{/* 或者   两种写法 */}

            <button onClick={add}>+++</button>
            <button onClick={minus}>---</button>

           {count}

           <Com2/>我是COm2
       </div>
    }
}

App = connect((state)=>{   //实际上写了两个回调函数
    return{
        // state就是redux那个对象
        // aaa:123,
        ...state,
        count:state.qqq.count
    }
},(dispatch)=>{
    // dispatch就是redux的store提供的dispatch
    console.log(dispatch);
    return{
        // 第一种挨个导出方法
        add(){
            dispatch({type:"ADD",num:10})
        },
        minus(){ 
            dispatch({type:"MINUS",num:10})
        },
        // 第二种全部导出
        dispatch
    }
})(App)

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById("root"))
