import React,{useState,useRef,useCallback} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { getNodeText } from '@testing-library/react';

function App() {
  const [todos,setTodos]=useState([
    
  
  ]);
  const nextID = useRef(0);
  const onInsert=useCallback((text)=>{
    const todo={
      id:nextID.current,
      text,
      checked:false
    };
    setTodos(todos.concat(todo));
    nextID.current+=1;

  },[todos]);

  const onRemove=useCallback((id)=>{
    setTodos(todos.filter((todo)=>{ return todo.id!==id}));
  },[todos])

 
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove}></TodoList>
    </TodoTemplate>
  );
}

export default App;
