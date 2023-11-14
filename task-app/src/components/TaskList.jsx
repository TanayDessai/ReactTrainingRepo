import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((group) => (
        <div key={group.priority}>
          <h2>{group.priority} Priority</h2>
          <ul>
            {group.tasks.map((task) => (
              <li
                key={task.id}
                style={{ color: task.priority === "High" ? "red" : "inherit" }}
              >
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
