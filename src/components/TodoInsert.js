import React,{useState, useCallback,useRef, createRef} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

export default function TodoInsert({onInsert}) {
    const todoInput=createRef('null');
    const [todoInputText,setTodoInputText] = useState('');
    const handleInputOnChange=useCallback((e)=>{
        setTodoInputText(e.target.value);
    },[]);

    const onSubmit=useCallback((e)=>{
        if(!todoInputText){
            e.preventDefault();
            return;
        }
        onInsert(todoInputText);
        setTodoInputText('');
        e.preventDefault();
        todoInput.current.focus();
    },[onInsert,todoInputText]);


    return (
        
            <form className='TodoInsert' onSubmit={onSubmit}>
            <input
            value={todoInputText} 
             type='text'
             placeholder="할 일을 입력하세요"
             onChange={handleInputOnChange}
             ref={todoInput}
             >
             </input>
            <button type='submit'>
                <MdAdd/>
            </button>
            </form>
        
    )
}
