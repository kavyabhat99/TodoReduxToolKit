import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../app/features/todo/todoSlice'

function Todos() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  return (
    <div>
      {
        todos.map((todo) => {
          return <div className="bg-gray-400 ml-[400px] mr-[400px] border-solid border-2 flex rounded-lg" key={todo.id}>
            <div className='text-white m-6'>{todo.text}</div>
            <button className='bg-red-500 m-4 rounded p-2 text-white' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default Todos
