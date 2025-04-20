import { useState } from 'react';
import { createProject } from '../services/api';

const NewProjectForm = ({ onProjectCreated }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject({ name, description: desc });
      setName('');
      setDesc('');
      onProjectCreated();
    } catch (err) {
      console.error("Failed to create project", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Project</h2>
      <input
        placeholder="Project name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default NewProjectForm;
