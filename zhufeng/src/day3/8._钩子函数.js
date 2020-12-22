import React from 'react';
import ReactDom from 'react-dom';

class Page1 extends React.Component{
    componentWillUnmount(){
        console.log("page1销毁");
    }
    render(){
        return <h1>page1</h1>
    }

}
class Page2 extends React.Component{
    componentWillUnmount(){
        console.log("page2销毁");
    }
    render(){
        return <h1>page2</h1>
    }

}
// 钩子函数：某个阶段执行某个对应的函数
class App extends React.Component{
    constructor(){   //第一个钩子函数：初始化
        super()
        this.state = {
           name:"4568",
           type:"page1"
        }
    }
/*     static getDerivedStateFromProps(props,state){
        // 主要目的：把props中的属性合并到state(实际上是把这个函数返回的东西合并到state中)
        // props:父组件传来的数据
        // state:就是自己的数据
        // 这个函数必须返回一个对象
        console.log(props,state);
        return {
            ...props,
            aaa:123456
        }

    } 
    componentWillMount(){
        // 类似于beforemount   
        // DOM渲染完成之前，可以同步更改     将要被废弃的一个钩子函数
        this.state.name = 9999
        console.log();
    }
    componentDidMount(){
        // DOM渲染完成后执行的钩子函数
        // 操作DOM（echerts   百度地图）
        // 发送ajax请求
    }
    // componentWillReceiveProps(newProps){
    //     // 当父组件传进来的数据更新时触发     将要被废弃的一个钩子函数
    // }
    shouldComponentUpdate(newProps,newState){
        // 这个钩子函数可以用来控制组件是否更新
        // 可以用来提升组件的渲染效率，是用来优化的钩子函数
        return false
    }
    componentDidUpdate(prevProps,prevState){
        // DOM更新完成后触发
    }
    componentWillUnmount(){
        // 组件销毁前
    } */
    // PureComponent    唇组件    写这个就不用写shouldComponentUpdate（）了
    /*  特点：会自动进行新老props校验，也就是会自动执行shouldComponentUpdate
              只会进行一层校验
      */
    render(){
        console.log(6666);
        let {type} = this.state
        console.log(this.state);

       return <div className=''>
           {this.state.name}

           <button onClick={()=>{this.setState({type:"page1"})}}>page1</button>
           <button onClick={()=>{this.setState({type:"page2"})}}>page25</button>

           {
               type == "page1"?
               <Page1/>:
               <Page2/>
           }

       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))
