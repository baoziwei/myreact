import React from 'react';
import ReactDom from 'react-dom';

function connect(obj) {  
    return function(Com){
        class Temp extends React.Component{
           render(){
            return <div className=''>
                <Com name={obj.name}/>
            </div>
           }
        }
        return Temp
        
    }
}
class App extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
        console.log(this);
       return <div className=''>

       </div>
    }
}

App = connect({name:"珠峰"})(App)

ReactDom.render(<App/>,document.getElementById("root"))
