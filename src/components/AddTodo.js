import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div className='p-4'>
      <form onSubmit={addTodoHandler}>
        <input className='m-4 border-solid border-2 border-indigo-600'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" className='bg-sky-500 rounded p-2 text-white' >Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
