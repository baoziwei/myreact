import React from 'react';
import ReactDom from 'react-dom';

// 组件首字母必须大写

//用function一般称为静态组件或者函数式组件 
function App666(props) {  
    console.log(arguments);
    return (<div>
       <p style={{color:props.style}}>123</p>
    </div>)
}

function H1() {  
    return <h1>家哈哈</h1>
}

// 凡是在组件上使用的行内属性都是自定义属性
//  在原生html上标签使用的都是react规定的

ReactDom.render(<>
                <App666 className="box1" id={666} qqq={622} style="red"/>
                <H1/>
                </>,document.getElementById("root"))
