import React from 'react';
import ReactDom from 'react-dom';
import List from "./components/list"
import Input from "./components/input"
import {Provider, connect} from "react-redux"
import store from "./store/index"

class App extends React.Component{
    state = {
        todo:"",
    }
    change=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    submit=()=>{
        this.setState({
            todo:""
        })
        this.props.dispatch({type: "TODO_ADD", 
        data:this.state.todo})
    }
    render(){
        let {todo} = this.state;
       return <div className=''>
           <Input value123={todo} onChange123={this.change} 
                onSubmit123={this.submit}></Input>
           <List value123={todo} onChange123={this.change} 
                onSubmit123={this.submit}/>
       </div>
    }
}

App = connect((state)=>{
    return{}
},(dispatch)=>{
    return{
        dispatch
    }
})(App)

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById("root"))
