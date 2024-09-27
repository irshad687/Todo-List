import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} mb={3}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
