import React from 'react';
import ReactDom from 'react-dom';

console.log(React.Component);
// 在class组件中，结构是通过rander函数返回结果决定的
class App extends React.Component{
    // 创造一个APP类，继承React.Component这个类
    // constructor(props){   //接收值
    //     // 在class声明类的时候，写了constructor  必写super() =>  相当于call继承
    //     super(props)
    // }
    render(){
        console.log(this.props);
        // this.props中的属性只读，不能改
       return <div>啦啦啦</div>
    }
}


ReactDom.render(<App className123='box'/>,document.getElementById("root"))