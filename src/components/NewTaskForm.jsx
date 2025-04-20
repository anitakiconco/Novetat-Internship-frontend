import { useState } from 'react';
import { addTask } from '../services/api';

const NewTaskForm = ({ projectId, onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(projectId, { title, due_date: dueDate || null });
    setTitle('');
    setDueDate('');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
