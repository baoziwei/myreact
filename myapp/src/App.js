import React, { Component } from 'react';
import Contact from './1_content/contact'
import AddContact from './1_content/addContact'
import Todos from './2_todo/todo';
import Addtodo from './2_todo/addtodo';
import Navbar from './component/nav';
import {Route, BrowserRouter} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BrowserRouter>
        <div>
           <Navbar/>
           <Route path = '/' component/>
        </div>
      </BrowserRouter>


     );
  }
}
 
export default App;


























// todo组件
/* export class App extends Component {
  state = {
    todos: [
      {id:1, content:'买菜'},
      {id:2, content:'做饭'},
      {id:3, content:'读书'},
    ]
  }

  deleteTodo = (id)=>{
     console.log(id);
     const todos = this.state.todos.filter(todo => {
       return todo.id != id
     })
     this.setState({
      todos: todos
     })
  }
  addtodoParent = (data)=>{
    data.id = Math.random();
    let todos = [...this.state.todos, data]
    this.setState({
      todos: todos
     })
  }
    
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-taxt'>任务列表</h1>
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <Addtodo addtodoChildren = {this.addtodoParent} />
      </div>
    )
  }
}

export default App */


















/* class App extends Component {
  state = {
    contactForm: [
      {name:'summer',age:18,sex:'男',id:1},
      {name:'summer2',age:32,sex:'女',id:2},
      {name:'summer3',age:55,sex:'男',id:3},
    ]
  }
  addContact = (data)=>{
    console.log(data);
    data.id = Math.random();
    let contactForm = [...this.state.contactForm, data]
    this.setState({
      contactForm: contactForm
    })
  }
  delContact = (id)=>{
  //  console.log(id);
    let contactForm = this.state.contactForm.filter(item => {
      return item.id != id
    })
    this.setState({
      contactForm: contactForm
    })
  }
  componentDidMount(){
    console.log('挂在完成');
  }
  componentDidUpdate(prevProps,prevState){
    // DOM更新完成后触发
    // 以前的Props数据
    // 更改前的State数据
    console.log('更新完成',prevProps,prevState);
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          123
        </header>
         <Contact name='lisa' age='18'  sex='男'/> 
        <Contact deleteContact = {this.delContact} contactForm = {this.state.contactForm}  />
        <AddContact addContant = {this.addContact}></AddContact>
      </div>
    );
  }
}

export default App; */



