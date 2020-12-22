import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    state = {
        name:"珠峰",
        list:[]
    }
    // componentDidMount(){
    //     this.inp.value = this.state.name
    // }
    chenge=(e)=>{
       this.setState({
           name:e.target.value
       })
    }
    del(n){
        this.state.list.splice(n,1)
        this.setState({
            // list:this.state.list.splice(n,1)
        })
        console.log(this.state.list);
    }
    keydown=(e)=>{
        // console.log(e.keyCode);
        if(e.keyCode == 13){
            this.setState({
                list:this.state.list.concat(this.state.name),
                name:""
            })
        }
    }
    render() {
        return (
            <div>

                <input value={this.state.name} onChange={this.chenge} onKeyDown={this.keydown} />  
                {
                    this.state.list.map((item,index)=><li key={index}>{item}<button onClick={()=>{this.del(index)}}>删除 </button></li>)
                }
                 {/* //受控组件 */}
                 
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
