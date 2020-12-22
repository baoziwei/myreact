import React from 'react';
import store from "../store/index"

class Com1 extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
       return <div className=''>
           组件数字数{store.getState().count}
       </div>
    }
}

export default Com1
