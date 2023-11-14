import React, { useState, useRef, useMemo } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskCategories from "./TaskCategories";
import useLocalStorage from "./useLocalStorage";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [categories, setCategories] = useLocalStorage("categories", []);
  const [currentCategory, setCurrentCategory] = useState("");

  const taskFormRef = useRef(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const removeCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const assignTaskToCategory = (taskId, category) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, category } : task
    );
    setTasks(updatedTasks);
  };

  const sortedTasks = useMemo(() => {
    // Memoize the sorted task list based on priorities
    const groupedTasks = ["High", "Medium", "Low"].map((priority) => ({
      priority,
      tasks: tasks.filter(
        (task) =>
          task.priority === priority &&
          (!currentCategory || task.category === currentCategory)
      ),
    }));
    return groupedTasks;
  }, [tasks, currentCategory]);

  return (
    <Container>
      <Row>
        <Col>
          <TaskForm
            addTask={addTask}
            priorities={["Low", "Medium", "High"]}
            ref={taskFormRef}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList tasks={sortedTasks} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskCategories
            categories={categories}
            addCategory={addCategory}
            removeCategory={removeCategory}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TaskManager;
