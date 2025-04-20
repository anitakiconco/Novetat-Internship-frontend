import React from 'react';

const ProjectList = ({ projects, onSelect }) => {
  if (!Array.isArray(projects)) {
    return <p>Loading or no projects available...</p>;
  }

  return (
    <div>
      <h2>All Projects</h2>
      {projects.length === 0 ? (
        <p>No projects yet. Create one!</p>
      ) : (
        <table className="project-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>
                  <button onClick={() => onSelect(project)}>View Tasks</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
};

export default ProjectList;
