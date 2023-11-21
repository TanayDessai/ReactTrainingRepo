import React, { useState, useRef } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Offcanvas,
  Button,
} from "react-bootstrap";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskCategories from "./TaskCategories";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const taskFormRef = useRef();

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: tasks.length + 1},
    ]);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const removeCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        className="justify-content-between"
        style={{ padding: "15px" }}
      >
        <Navbar.Brand className="mr-auto">Task-List Manager</Navbar.Brand>
        <Nav className="ml-auto">
          <Button
            variant="outline-dark"
            onClick={() => setShowOffcanvas(true)}
            className="ml-auto"
          >
            Add Task
          </Button>
        </Nav>
      </Navbar>

      <Row>
        <Col>
          <TaskList
            categories={categories}
            tasks={tasks}
            deleteTask={deleteTask}
          />
        </Col>
      </Row>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TaskForm
            addTask={addTask}
            priorities={["Low", "Medium", "High"]}
            categories={categories}
            ref={taskFormRef}
          />

          <TaskCategories
            categories={categories}
            addCategory={addCategory}
            removeCategory={removeCategory}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default TaskManager;
