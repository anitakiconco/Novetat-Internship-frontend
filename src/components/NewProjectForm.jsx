// import { useState } from 'react';
// import { createProject } from '../services/api';

// const NewProjectForm = ({ onProjectCreated }) => {
//   const [name, setName] = useState('');
//   // const [description, setDesc] = useState('');
//   const [desc, setDesc] = useState('');

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   //added something here
//   //   await createProject({ name, description: desc });
//   //   axios.post("http://localhost:3000/create", projectData);

//   //   setName('');
//   //   setDesc('');
//   //   onProjectCreated();
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const projectData = {
//       name,
//       description: desc,
//     };
  
//     try {
//       await axios.post("http://localhost:3000/create", projectData);
//       setName('');
//       setDesc('');
//       onProjectCreated();
//     } catch (error) {
//       console.error("Error creating project:", error);
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//     <h2>Create New Project</h2>
//       <input placeholder="Project name" value={name} onChange={e => setName(e.target.value)} required />
//       <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
//       <button type="submit">Create Project</button>
//     </form>

    
//   );
// };

// export default NewProjectForm;


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
