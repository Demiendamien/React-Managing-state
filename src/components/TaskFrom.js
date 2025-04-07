import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask = {} }) => {
  const [name, setName] = useState(initialTask.name || '');
  const [description, setDescription] = useState(initialTask.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    onSubmit({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Valider</button>
    </form>
  );
};

export default TaskForm;