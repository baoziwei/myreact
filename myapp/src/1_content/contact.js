import React, { Component } from 'react';
import './Contact.css'
const Contact = (props)=>{
// const Contact = ({contactForm})=>{

/*         // const {name,age,sex} = this.props
        // const {contactForm, delContact123} = props666;

        // 1.If逻辑处理
            // const formList = contactForm.map(item =>{
            //     if(item.age >= 30){   
            //         return (
            //             <div className='ContactForm'  key = {item.id}>
            //                 <div className='name'>姓名：{item.name}</div>
            //                 <div>年龄：{item.age}</div>
            //                 <div>姓行呗：{item.sex}</div>
            //             </div>
            //         )
            //     }else{
            //         return null;
            //     }

            // }) */

/*         // 三元运算符
            // const formList = contactForm.map(item =>{
            //     return (
            //         item.sex === '男' ? (
            //             <div className='ContactForm'  key = {item.id}>
            //                 <div className='name'>姓名：{item.name}</div>
            //                 <div>年龄：{item.age}</div>
            //                 <div>姓行呗：{item.sex}</div>
            //             </div>
            //         ):null
            //     )
            // }) */
        const {contactForm, deleteContact} = props;
        return (
            <div className='formList'> 
              {
                contactForm.map(item =>{
                    return (
                        item.sex === '男' ? (
                            <div className='ContactForm'  key = {item.id}>
                                <div className='name'>姓名：{item.name}</div>
                                <div>年龄：{item.age}</div>
                                <div>姓行呗：{item.sex}</div>
                                <button onClick={()=>deleteContact(item.id)}>删除</button>
                            </div>
                        ):null
                    )
                })
              } 
            </div>
     
        )
    }

export default Contact

{/* <div className='ContactForm'>
    <div>姓名：{name}</div>
    <div>年龄：{age}</div>
    <div>姓行呗：{sex}</div>
</div> */}