import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import propTypes from "prop-types"   //用来处理传进来的数据的情况
import qqq from "prop-types"

// 子传父：通过事件参数传递
// 父传子： props

// 限制传进来的数据的情况

class Button extends Component{
    static propTypes = {
        // className:qqq.string ，  //className必须是个字符串   规定单个数据类型
        className: qqq.oneOfType([                       //规定多个数据类型
            qqq.string,
            qqq.number,
          ]).isRequired,  //必传
    }
    
    state={
        name:"woshizizujian"
    }
    click=()=>{
        this.props.onClick123 && this.props.onClick123()
        this.props.onChangeName && this.props.onChangeName(this.state.name)

    }

    // 给默认值的
    // static defaultProps = {
    //     className: 'qqqqqqqq'
    // }; 
    render(){
        let {className="qqq",onClick123,children="hahahh",} = this.props   //children:字符串，数组，对象（单个节点（标签）虚拟DOM）
        // return <button className={className} onClick={onClick123}>{children}</button>
        return <button className={className} onClick={this.click}>{children}</button>

    }
}
class App extends React.Component{
    constructor(){   
        super()
        this.state = {
           name:"珠峰",
           className:"box"
        }
    }
    fn=()=>{
        // console.log(e);
        console.log(666);
        this.setState({
            name:"zhufengpeixun"
        })
    }
    qqq=(name)=>{
        this.setState({
            name:name
        })
    }
    render(){
       return <div className=''>
           <Button className={this.state.className}><i>222</i></Button>
           <Button onClick123={this.fn}/>{this.state.name}
           <Button onChangeName={this.qqq}/>
       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))
