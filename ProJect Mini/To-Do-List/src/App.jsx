import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleDelete(taskItem) {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskItem));
  }

  function handleToggle(taskItem) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === taskItem ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formState.task.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          task: formState.task,
          completed: formState.completed,
          taskAssignedTo: formState.taskAssignedTo,
        },
      ]);

      setFormState({
        task: "",
        completed: false,
        taskAssignedTo: "",
      });
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          onDelete={(taskItem) => handleDelete(taskItem)}
          onToggle={(taskItem) => handleToggle(taskItem)}
        />
      ))} 
    </>
  );
}

export default App;
