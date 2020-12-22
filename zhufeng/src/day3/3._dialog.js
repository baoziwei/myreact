import React from 'react';
import ReactDom from 'react-dom';
import Dialog from "../components/dailog"

class App extends React.Component{
    state = {
        flag:false
    }
    showFn = ()=>{
        this.setState({
            flag:true
        })
    }
    close=(a)=>{
        this.setState({
            flag:a
        })
    }
    ok=()=>{
        console.log("点击了ok");
    }
    no=()=>{
        console.log("点击了no");
    }
    render(){
       return <div className=''>
           <button onClick={this.showFn}>展示弹框</button>
           {
               this.state.flag?
                <Dialog onClose={this.close} onSure={this.ok} 
                onCancel={this.no}>
               
                    {/* <header slot="header">自己的头部</header> */}
                    {/* <header>自己的内容</header> */}
                    {/* <header slot="footer">自己尾部</header> */}

                </Dialog>:

               null
           }

       </div>
    }
}


ReactDom.render(<App/>,document.getElementById("root"))
