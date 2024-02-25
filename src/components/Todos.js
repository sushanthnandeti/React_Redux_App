import React from 'react'
import {useSelector} from 'react-redux';

function Todos() {

  const todos = useSelector(state => state.todos);
  console.log(todos);

  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
      <li key = {todo.id}> <div> {todo.text} </div>
 
      </li>
  ))}
    </>
)}

export default Todos;