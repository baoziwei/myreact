import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container'>
                <h3 className='页面'>Content页面</h3>
                <p>欢迎来到Content页面</p>

            </div>
         );
    }
}
 
export default Content;