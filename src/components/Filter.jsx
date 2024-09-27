import { ButtonGroup, Button } from '@mui/material';

const Filter = ({ setFilter }) => {
  return (
    <ButtonGroup variant="outlined" fullWidth style={{ marginBottom: '1rem' }}>
      <Button onClick={() => setFilter('all')}>All</Button>
      <Button onClick={() => setFilter('completed')}>Completed</Button>
      <Button onClick={() => setFilter('pending')}>Pending</Button>
    </ButtonGroup>
  );
};

export default Filter;
