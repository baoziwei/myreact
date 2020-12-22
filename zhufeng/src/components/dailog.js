import React from 'react';
import './dialog.less'

class Dialog extends React.Component{
    constructor(){   
        super()
        this.state = {
  
        }
    }
    close=(e)=>{
        console.log(6666);
        if(e.target.getAttribute("self")){
            this.props.onClose&&this.props.onClose(false)
        }
    }
    sure=()=>{
        this.props.onSure&&this.props.onSure()
    }
    cancel=()=>{
        this.props.onCancel&&this.props.onCancel(false)
    }
    render(){
       let {children} = this.props
       console.log(children);
       let header = <p>默认头部</p>;
       let main = <p>默认内容</p>;
       let footer =    <div className="box" self="true">
                            <button onClick={this.sure}>默认确定</button>
                            <button onClick={this.cancel}>默认取消</button>
                        </div>

        if(typeof children == "string"){
            main = children

        }else if(Array.isArray(children)){
            console.log(999999);
            let h= [];
            let m = [];
            let f = [];
            children.forEach(item=>{
                if(typeof item == 'string'){
                    m.push(item)
                }else{
                    if(item.props.slot == "hrader"){
                        h.push(item)
                    }else if(item.props.slot == "main"){
                        m.push(item)
                    }else{
                        f.push(item)
                    }
                }
            })

            header = h.length ? h : header;
            main = m.length ? m : main;
            footer = f.length ? f : footer;
        }else if(typeof children !== "undefined"){
            switch (children.props.slot) {
                case "header":
                    header = children
                    break;
                case "footer":
                    footer = children
                    break;        
                default:
                    main = children
                    break;
            }
        }
  

       return <div className='dialog_box' self="true" onClick={this.close}>
           <div className="box" self="true">
           {header}
           {main}
           {footer}
           </div>
       </div>
    }
}

export default Dialog
