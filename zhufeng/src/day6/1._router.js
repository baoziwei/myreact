import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch, Redirect} from "react-router-dom"
// BrowserRouter  利用的是 H5 的history  Api;  对比vue就是history  利用的是popState
// HashRouter 利用的是  hashChange;            对比vue是hash模式  
// 项目中  我们需要使用其中一个把根组件抱起来
//Link  相当于 vue  的 router-link  用来跳转对应路径（to属性跟的值）
// NavLink 用法 = Link  比Link多一个类名
// Route  相当于  vue  的 router-view  用来展示对应的哪个组件
// Switch  用这个组件把用到的route抱起来   可以避免react每一个route都去匹配的情形
// Redirect 重定向
// 在react  我们可以使用search  或者  params的方式进行参数传递
//  若是search  通过loaction.search  或者this.props.location.search
//  若是params  我们需要在编写Route组件的时候  /xxx/:属性名,  调用的时候  通过this.props.match.params获取   参数少

// react中路由懒加载  npm i react-loadable
// import Home from "./component/home"
// import User from "./component/uaer"
import Loadable from 'react-loadable';

const Home = Loadable({
    loader: () => import(/*webpackChunkName:"home"*/'./component/home'),
    loading: ()=><h3>正在加载</h3>,
});
const User = Loadable({
    loader: () => import(/*webpackChunkName:"user"*/'./component/uaer'),
    loading: ()=><h3>正在加载</h3>,
});


let Temp = ()=><h1>啦啦啦</h1>
class App extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    render(){
       return <div className=''>
           <Link to="/home/666">首页</Link>
           <Link to="/user">用户</Link>
           <NavLink to="/home/777">首页</NavLink>
           <NavLink to="/user?qqq=123&aaa=456">用户</NavLink>
           <Switch>
              {/* <Route path="/" exact component={Temp}>哈哈哈哈</Route> */}
              {/* exact是一个精确匹配  只有路径 与 path的值 完全相等 才可*/}

              <Redirect path="/" exact to="/home"></Redirect>
              {/* 当前路径如果是/  则重定到/home */}

              <Route path="/home/:qqq" component={Home}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/*">404</Route>
           </Switch>

           

           
       </div>
    }
}


ReactDom.render(
<HashRouter>
<App/>
</HashRouter>,document.getElementById("root"))

// 传参：方法传参、隐形传参、路径参数
