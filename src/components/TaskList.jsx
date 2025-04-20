import { useEffect, useState } from 'react';
import { getTasks, markTaskAsDone } from '../services/api';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, [projectId]);

  const loadTasks = async () => {
    const res = await getTasks(projectId);
    setTasks(res.data);
  };

  const markDone = async (id) => {
    await markTaskAsDone(id);
    loadTasks();
  };

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.status}
            {task.status !== 'DONE' && <button onClick={() => markDone(task.id)}>Mark as Done</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
