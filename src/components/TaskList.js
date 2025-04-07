import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggleComplete={() => onToggleComplete(index)}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;