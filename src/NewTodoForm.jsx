import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import './NewTodoForm.css'

// set up form validation
const validationSchema = yup.object({
  task: yup
    .string('Task cannot be empty.')
    .required('Required'),
});
// end form validation


const NewTodoForm = ({ addTodo }) => {

  const INITIAL_STATE = { task: "" }
  const [formData, setFormData] = useState(INITIAL_STATE)

  // send bgColor, width, and height to parent form and clear form
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [id]: value
    })) 
  }

  const formik = useFormik({
    initialValues: {
      task: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addTodo(values);
      resetForm({
        task: ""
      })
    }
  })


  return (
    <Grid item xs={12} md={6}>
      <Stack
        justifyContent="center"
        component="form"
        autoComplete="off"
        sx={{ mb: 4 }}
        onSubmit={formik.handleSubmit}
      >
        <TextField 
          id="task"
          label="Task"
          variant="standard"
          sx={{ mb: 2 }}
          value={formik.values.task}
          onChange={formik.handleChange}
          error={formik.touched.task && Boolean(formik.errors.task)}
          helperText={formik.touched.task && formik.errors.task}
        />

        <Button variant="contained" color="secondary" type="submit">Add new task</Button>

      </Stack>
    </Grid>
  )
}

export default NewTodoForm;