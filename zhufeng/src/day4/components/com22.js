import React from 'react';
import {connect} from "react-redux"



class Com2 extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
       return <div className='' style={{color:this.props.col}}>
           <h1> {this.props.qqq}</h1>
       </div>
    }
}
Com2 = connect((state)=>{
    return{
        qqq:state.qqq.count,
        col:state.www.color
    }
})(Com2)

export default Com2
