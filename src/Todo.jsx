import { useState } from 'react'
import './Todo.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

const Todo = ({ id, task, handleRemove }) => {

  const remove = () => handleRemove(id)

  return (
    <TableRow
      className="Todo"
      data-testid="todo-row"
    >
      <TableCell>
        <Typography variant="span">{task}</Typography>
      </TableCell>
      <TableCell padding="checkbox">
        <Button onClick={remove} data-testid="remove-btn">X</Button>
      </TableCell>
    </TableRow>
  )
}

export default Todo;