import React from 'react';
import ReactDom from 'react-dom';

// react组件只有两个数据源：  一个是属性props;    另一个state
class App extends React.Component{
    constructor(){   //接收值
        super()
        this.state = {
            // 这里放当前组件的私有属性
            name:"暴紫微",
            time:new Date().toLocaleString(),
        }
    }
    // 想让视图更新：   react规定需要调用setState这个方法，也就是让render函数执行
    // 在render中   不能写setState  这个方法执行，会触发死循环
    componentDidMount(){
        // 当组件的DOM渲染完成后  会触发这个函数
        setInterval(() =>{
            this.setState({
                // 也就是主动触发双向数据绑定
                time:new Date().toLocaleString()
            })
        })
    }
    render(){
       let {className} = this.props;
       let {name, time} = this.state;
       return <div className={className}>
         {name}
         <h2>{time}</h2>
       </div>
    }
}


ReactDom.render(<App className='box'/>,document.getElementById("root"))