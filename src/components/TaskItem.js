import React from 'react';

const TaskItem = ({ task, onToggleComplete, onEdit, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={onToggleComplete}>
          {task.completed ? 'Activer' : 'Terminer'}
        </button>
        <button onClick={onEdit}>Modifier</button>
        <button onClick={onDelete}>Supprimer</button>
      </div>
    </div>
  );
};

export default TaskItem;