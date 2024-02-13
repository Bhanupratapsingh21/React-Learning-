import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  const { task, completed, taskAssignedTo } = item;

  return (
    <div style={{ color: completed ? "green" : "red" }}>
      <span>{task}</span>
      <span style={{ marginLeft: "10px", fontStyle: "italic" }}>
        (Assigned to: {taskAssignedTo})
      </span>
      <button onClick={() => onDelete(item)}>Delete Task</button>
      <button onClick={() => onToggle(item)}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;
