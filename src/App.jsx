import { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import NewProjectForm from './components/NewProjectForm';
import NewTaskForm from './components/NewTaskForm';
import { getProjects } from './services/api';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {

    try {
      const res = await getProjects();
      setProjects(res.data.projects || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    
  };

  return (
    <div>
      <h1>Simple Task Manager</h1>
      <NewProjectForm onProjectCreated={loadProjects} />
      <ProjectList projects={projects} onSelect={setSelectedProject} />
      {selectedProject && (
        <>
          <TaskList projectId={selectedProject.id} />
          {/* <NewTaskForm projectId={selectedProject.id} onTaskAdded={() => {}} /> */}
          <NewTaskForm projectId={selectedProject.id} onTaskAdded={loadProjects} />
        </>
      )}
    </div>
  );
}

export default App;
