import React,{useState,useRef,useCallback,useEffect} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { getNodeText } from '@testing-library/react';
import producer from 'immer';

function App() {
  const [todos,setTodos]=useState([
  ]);
   const nextID = useRef(0);
   const DetailView=useRef(0);
  
  useEffect(() => {
    const getTodos=JSON.parse(localStorage.getItem('todos'));
    const getid=localStorage.getItem('id');
    if(getTodos){
    setTodos(getTodos);
    nextID.current=Number(getid);
    }
    return () => {
     
    };
  },[]);


 

  const onSave=useCallback((todos)=>{
    localStorage.setItem('id',JSON.stringify(nextID.current+1))
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);


  const onInsert=useCallback((text)=>{
    const todo={
      id:nextID.current,
      text,
      checked:false
    };
    onSave(todos.concat(todo));
    setTodos(todos.concat(todo));
    nextID.current+=1;
   
  },[todos]);


  const onRemove=useCallback((id)=>{
    onSave(todos.filter((todo)=>{ return todo.id!==id}));
    setTodos(todos.filter((todo)=>{ return todo.id!==id}));
    
  },[todos])

 const onToggle=useCallback((id)=>{
  onSave(todos.map((todo,index)=>{
    return todo.id===id?{...todo, checked:!todo.checked}:todo
   }));
   setTodos(
   todos.map((todo,index)=>{
     return todo.id===id?{...todo, checked:!todo.checked}:todo
    })
  );
  },[todos]);

  const onDetailClicked=useCallback((id)=>{
    

  },[DetailView]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} ></TodoList>
    </TodoTemplate>
  );
}

export default App;
