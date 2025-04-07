import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskFrom';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
    setEditingTask(null);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task, index) =>
        index === editingTask ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTask(null);
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="app">
      <h1>Gestionnaire de Tâches</h1>
      <TaskForm
        onSubmit={editingTask !== null ? updateTask : addTask}
        initialTask={editingTask !== null ? tasks[editingTask] : {}}
      />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onEdit={(index) => setEditingTask(index)} // Passe l'index de la tâche à modifier
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;