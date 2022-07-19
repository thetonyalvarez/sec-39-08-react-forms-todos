import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import './TodoList.css'



const TodoList = () => {
  const [todos, setTodos] = useState([])
  
  // add new todo
  const addTodo = (todo) => {
    let newTodo = {...todo, id: uuid()}
    setTodos(todos => [...todos, newTodo])
  }
  // end addTodo

  // remove todo
  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  // end todo

  // render all todos
  const renderTodos = () => {
    return (
      <Grid item xs={12} md={6} data-testid="TodoList">
        <Table className="todoGrid" data-testid="Table">
          <TableBody>
            {todos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                handleRemove={removeTodo}
                data-testid="Todo"
              />
            ))}
          </TableBody>
        </Table>
      </Grid>
    )
  }

  return (
    <Grid container spacing={8} className="TodoList">
      <NewTodoForm addTodo={addTodo}/>
      {renderTodos()}
    </Grid>
  )
}

export default TodoList;