import React from 'react';
import {connect} from "react-redux"

class List extends React.Component{
    del(n){
        this.props.dispatch({
            type:"TODO_REMOVE",
            data:n
        })
    }
    render(){
        // let {value123,onChange123,onSubmit123} = this.props
        console.log('888',this.props);
       return <div className=''>
           {
               this.props.list123.map((item,i)=><li key={item}>{item} 
               <button onClick={()=>{this.del(i)}}>删除</button></li>)

           }
       </div>
    }
}

let List123 = connect((state)=>{
    return {
        list123: state.todo.list
    }
})(List)
export default List123
