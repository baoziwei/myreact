import React from 'react';
import logo from './logo.svg';
import './App.css';


var aa = "嘻嘻嘻";
var obj = {a:"我是对象"};
var ary = [{name:"张三1"},{name:"张三2"},{name:"张三3"},{name:"张三4"},{name:"张三5"}]
// 第一种   // var ary2= ary.map((item,index)=>{
// return <li key={index}>{item.name}</li>
// })
// console.log(ary2);

// 第二种   //  function fn(arr) {  
//   var temp = [];
//   for(var i = 0; i<arr.length; i++){
//     temp.push(<li key={i}>{arr[i].name}</li>)
//   }
//   return temp
// }


//  {}  这里不能直接写对象，但是可以写数组    只能写数组和值类型
// 行内样式  style={{colorL:red}}
function App() {
  return (
    <div className="App">
    <h1>999</h1>
  <h2>{String(obj.a)}</h2>

  {/* {fn(ary)} */}
  {/* {ary2} */}
  <ul>{
    ary.map(item=><li key={item.name} style={{marginLeft:"30px"}}>{item.name}</li>)
  }</ul>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {aa > 2 ? "111" : "222"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
