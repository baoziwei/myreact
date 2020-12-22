import React from 'react';
import ReactDom from 'react-dom';
import {NavLink, Route, Redirect} from "react-router-dom"
class User extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
        console.log(this);
       return <div className=''>
           <h1>用户中心</h1>
           <NavLink to="/user/money">钱包</NavLink>
           <NavLink to="/user/quan">优惠券</NavLink>
           <Redirect path="/user" to="/user/quan"> </Redirect>

           <Route path="/user/money" render={()=><h2>钱包22</h2>}></Route>
           <Route path="/user/quan" render={()=><h2>优惠券22</h2>}></Route>

       </div>
    }
}

export default User
