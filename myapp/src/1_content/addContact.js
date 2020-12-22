import React, { Component } from 'react';

class addContact extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        name: null,
        ageL: null,
        sex: null
    }
    handleChange = (e) =>{
       this.setState({
           [e.target.id] : e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addContant(this.state);
        this.setState({
            name: ''
        })
    }
    render(){
        return(
            <div>
                <form action="" onSubmit= {this.handleSubmit}>
                    <label htmlFor="" htmlFor='name'>Name:</label>
                    <input type="text" id='name' onChange = {this.handleChange} value={this.state.name || ''}/>
                    <label htmlFor="" htmlFor='age'>age:</label>
                    <input type="text" id='age' onChange = {this.handleChange}/>
                    <label htmlFor="" htmlFor='sex'>sex:</label>
                    <input type="text" id='sex' onChange = {this.handleChange}/>
                    <button>提交表单</button>
                </form>

            </div>
        )
        
    }
}
export default addContact