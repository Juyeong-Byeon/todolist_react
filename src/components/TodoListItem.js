import React from 'react'
import className from 'classnames';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
}from 'react-icons/md';
import './TodoListItem.scss';


export default function TodoListItem({todo,onRemove,onToggle}) {
    const {id,text,checked}=todo;
    
    return (
        <div className="TodoListItem">
            <div className={className('checkbox',{checked})} onClick={()=>{onToggle(id);}}>
                {checked?<MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
        <div className='text' >{text}</div>
            </div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>

        </div>
    )
}
