import React,{useState} from 'react'
import { TodoForm } from './TodoForm.js'
import { Todo } from "./Todo.js";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from './EditTodoForm.js';
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,{id:uuidv4(),task:todo,
        completed:false, isEditing:false}])
        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, completed: !todo.completed} : todo))
        }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }    

    const EditTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo
        ))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, task, isEditing: !todo.isEditing} : todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get things done!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index) =>(
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} 
                task={todo}/>
            ) : (
            <Todo task={todo} key={index}
             toggleComplete={toggleComplete} 
             deleteTodo = {deleteTodo}
             EditTodo={EditTodo}/>
            )
            
        ))}
       
    </div>
  )
}
