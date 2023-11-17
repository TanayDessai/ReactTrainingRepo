import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const TaskForm = ({ addTask, priorities, categories }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add task to the list
    addTask({
      name: taskName,
      description: taskDescription,
      priority,
      category: selectedCategory,
    });
    // Clear form inputs
    setTaskName("");
    setTaskDescription("");
    setPriority("Low");
    setSelectedCategory("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Col>
        <Col>
          <Form.Group controlId="taskName">
            <Form.Label>Task Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="taskDescription" className="mt-4">
            <Form.Label>Task Description:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Col>
      <Row className="mt-4">
        <Col>
          <Form.Group controlId="priority">
            <Form.Label>Priority:</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="mt-4">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
