import React, { useState } from "react";
import { Card, Button, ListGroup, Form } from "react-bootstrap";

const TaskList = ({ categories, tasks, editTask, deleteTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);

  const handleEditClick = (taskId) => {
    setEditTaskId(taskId);
  };

  const handleSaveClick = () => {
    setEditTaskId(null);
  };

  const handleDeleteClick = (taskId) => {
    deleteTask(taskId);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "yellow";
      case "Low":
        return "green";
      default:
        return "inherit";
    }
  };

  return (
    <div>
      {categories.map((category) => (
        <Card key={category} className="mb-3">
          <Card.Header>{category}</Card.Header>
          <ListGroup variant="flush">
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <ListGroup.Item
                  key={task.id}
                  style={{ backgroundColor: getPriorityColor(task.priority) }}
                  className="d-flex justify-content-between align-items-center"
                >
                  {editTaskId === task.id ? (
                    <>
                      <div>
                        <Form.Control
                          type="text"
                          value={task.name}
                          onChange={(e) =>
                            editTask(task.id, { ...task, name: e.target.value })
                          }
                          placeholder="Task Name"
                          className="mb-2"
                        />
                        <Form.Control
                          as="textarea"
                          value={task.description}
                          onChange={(e) =>
                            editTask(task.id, {
                              ...task,
                              description: e.target.value,
                            })
                          }
                          placeholder="Task Description"
                          className="mb-2"
                        />
                      </div>
                      <div>
                        <Button
                          variant="primary"
                          onClick={handleSaveClick}
                          className="ml-2"
                        >
                          Save
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div>{task.name}</div>
                        <div>{task.description}</div>
                      </div>
                      <div className="d-flex">
                        <Button
                          variant="info"
                          onClick={() => handleEditClick(task.id)}
                        >
                          Edit
                        </Button>
                        <div style={{ width: "10px" }}></div>{" "}
                        {/* Adding a gap of 10px */}
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteClick(task.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
