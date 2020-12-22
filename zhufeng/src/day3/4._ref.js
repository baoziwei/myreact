import React from 'react';
import ReactDom from 'react-dom';

/* 
   获取DOM元素或组件
        ref不能获取函数是组件
        ref="xxx"  this.refs.zzz    将要废弃
        ref = {(el)=>{this.xxx = el}}   this.xxx
        this.xxx = React.createRef()     this.xxx.current */
class App extends React.Component{
    constructor(){   
        super()
        this.www = React.createRef()
        this.state = {
  
        }
    }
    fn=()=>{
        console.log(this.refs.aaa);
        console.log(this.qqq);
        console.log(this.www.current);
    }
    render(){
       return <div className=''>
           <button onClick={this.fn}>按钮</button>
           <p className="qqq" ref="aaa">6666</p>
           <p className="qqq" ref={(el)=>{this.qqq=el}}>6666</p>
           <p ref={this.www}>6666</p>
           
       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))
