import React from 'react';
import ReactDom from 'react-dom';
let Context = React.createContext()

class Btn extends React.PureComponent{
    static contextType = Context
    render(){
        console.log(this);
        return <div className=''>
           hahahha222{this.context.theme}
        </div>
    }
 }
class Show extends React.PureComponent{
   static contextType = Context
   render(){
       console.log(this);
       return <div className=''>
           <Btn/>
          hahahha111{this.context.theme}
       </div>
   }
}

class App extends React.Component{

    render(){
       return <div className=''>
          <Show/>
       </div>
    }
}


ReactDom.render(
<Context.Provider value={{theme:"red",title22:"珠峰"}}>
  <App/>
</Context.Provider>,document.getElementById("root"))
