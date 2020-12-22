import React from 'react'

const Todos = ({ todos, deleteTodo }) =>{
    const todoList = todos.length ? (todos.map(item => {
        return (
            <div className='collection-item' key={item.id}>
                <span onClick={() => deleteTodo(item.id)}>{item.content}</span>
            </div>
        )
    })) : (
        <p className='center'>没有数据了</p>
    )
   return (
       <div className='todos collection'>
          {todoList}
       </div>
   )
}
export default Todos