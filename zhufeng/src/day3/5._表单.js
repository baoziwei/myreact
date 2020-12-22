import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    state = {
        name:"珠峰"
    }
    componentDidMount(){
        this.inp.value = this.state.name
    }
    chenge=(e)=>{
       this.setState({
           name:e.target.value
       })
    }
    render() {
        return (
            <div>
                <input ref={(el)=>{this.inp = el}} />  
                 {/* //非受控组件 */}

                <input value={this.state.name} onChange={this.chenge}/>  
                 {/* //受控组件 */}
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
