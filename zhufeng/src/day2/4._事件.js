import React from 'react';
import ReactDom from 'react-dom';

// 属性：从外部传过来的    状态（state）：自己定义的
// 类组件
class App extends React.Component{
    // constructor(){   
    //     super()
    //     this.state = {
    //       count:100
    //     }
    // }
    state = {
        count: 100,
        aa:20
    }
    add(n,e){
        console.log(e.nativeEvent,e.target);
        // console.log("+")
        // console.log(this);
        this.setState({
            count: this.state.count+n
        })
    }
    minus(e,n){
        console.log(e);
        console.log(n);
        // console.log("-");
        // setStste更新数据  大部分  是异步操作
        // 在  原生事件绑定中  或者  定时器  中总是同步的
        this.setState({
            count: this.state.count-n,
            aa:this.state.aa-1
        },function () {  
            // 数据更新之后触发
            // console.log(this.state.count);
        })
    }
    minus2=(e)=>{
        // console.log(this);
        console.log(e);
        this.setState({
            count: this.state.count+1
        })
    }
    over(){
        // console.log("over");
    }
    componentDidMount(){
      
    }
    render(){
        let {count} = this.state
       return <div className=''>
           {/* on+事件名   事件名遵循  驼峰命名  合成时间（就是原生事件） */}
            <button onClick={this.add.bind(this)}>+</button>
            {/* bind的返回结果给了onClick,这里一旦bind之后this就改不了了  (不能用call,call直接让函数执行，返回了执行结果；bind返回的是函数体吧)*/}
            <button onClick={this.add.bind(this,10)}>+10</button>
            <button onClick={this.add.bind(this,100)}>+100</button>

            <button onClick={(e)=>{this.minus(e,10)}}>-10</button>   
            {/* 把箭头函数给了onClick ，箭头函数的作用域就是上级作用域的this,上级作用域就是render*/}

            <button onClick={this.minus2}>---</button>   

    <h2 onMouseOver={this.over}> {count}  {this.state.aa}</h2>
       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))