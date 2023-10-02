import {useContext,createContext} from 'react'

export const TodoContext = createContext({
    todos: [
    {
        id: 2,
        todo: 'msg',
        complete : false
    }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider