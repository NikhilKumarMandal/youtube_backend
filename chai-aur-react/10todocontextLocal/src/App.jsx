import { useState,useEffect } from 'react'
import './App.css'
import { TodoContext,TodoProvider } from './Contexts'
import TodoForm from './Component/TodoForm'
import TodoItem from './Component/TodoItem'


function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo},...prev] )
  }

  const updateTodo = (todo,id) => {
      setTodos( (prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo)  )

      // prev.map((eachVal) => {
      //   if (prevTodo.id === id) {
      //     todo
      //   }
        
      // }) 
  }

 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value = {{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#080809] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map( (todo) => (
                          <div className='w-full' key={todo.id} >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
