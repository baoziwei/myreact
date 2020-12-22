import React from 'react';
import ReactDom from 'react-dom';
import qqq from "prop-types"

/* 
  创造一个上下文  首先  声明上下文中的数据类型
*/
/* static childContextTypes  = {
    theme:qqq.string,
    title:qqq.string
}
getChildContext(){
    return{
        theme: "red",
        title: "珠峰"        
    }   
} */
class Btn extends React.PureComponent{
    static contextTypes = {
        title: qqq.string
    }
    render(){
        console.log(this);
        return <div className=''>
           hahahha222{this.context.title}
        </div>
    }
 }
class Show extends React.PureComponent{
   static contextTypes = {
       theme:qqq.string
   }
   render(){
       console.log(this);
       return <div className=''>
           <Btn/>
          hahahha111{this.context.theme}
       </div>
   }
}

class App extends React.Component{
    static childContextTypes  = {
        theme:qqq.string,
        title:qqq.string
    }
    getChildContext(){
        return{
            theme: "red",
            title: "珠峰"        
        }   
    }
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
       return <div className=''>
          <Show/>
       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))
