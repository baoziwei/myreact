import React from 'react';

class Input extends React.Component{
    keyDown=(e)=>{
        console.log(this.props);
       if(e.keyCode == 13){
           this.props.onSubmit123();
       }
    }
    render(){
        console.log('777',this.props);
        let {value123,onChange123} = this.props
       return <div className=''>
           <input type="text" value={value123} onChange={onChange123}
             onKeyDown={this.keyDown} /> 
       </div>
    }
}
export default Input
