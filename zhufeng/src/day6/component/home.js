import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
        console.log("home",this);
       return <div className=''>
           <h1>首页</h1>
       </div>
    }
}


export default Home

