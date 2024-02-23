import React from 'react'
import {useSelector} from 'react-redux';

function GetTodos() {

  const todos = useSelector(state => state.todos);
  console.log(todos);

  return (
    <div>GetTodos</div>
  )
}

export default GetTodos;