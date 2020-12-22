import React, { Component } from 'react';
class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: ''
         }
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })

    }
    submit1 = (e) =>{
        e.preventDefault();
        this.props.addtodoChildren(this.state)
        this.setState({
            content:''
        })

    }
    render() { 
        return ( 
            <div className='aa'>
                <form action="" onSubmit={this.submit1}>
                    <label htmlFor="">添加新内容</label>
                    <input type="text"onChange={this.handleChange} value={this.state.content} />
                </form>
            </div> 

        );
    }
}
 
export default Addtodo;