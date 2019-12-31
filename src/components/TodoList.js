import React from 'react'
import TodoListItem from './TodoListItem';

export default function TodoList({todos,onRemove}) {
    return (
        <div className='TodoList'>
            {
                todos.map((todo,i)=>{
                    
                    return(<TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>)
                })
            }
        </div>
    )
}
