import React, { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

const TaskCategories = ({ categories, addCategory, removeCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() !== "" && !categories.includes(newCategory)) {
      addCategory(newCategory.trim());
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (category) => {
    removeCategory(category);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="newCategory" className="mt-5">
          <Form.Label>Add New Category:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddCategory} className="mt-3">
          Add Category
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {categories.map((category) => (
          <ListGroup.Item
            key={category}
            className="d-flex justify-content-between align-items-center"
          >
            {category}
            <Button
              variant="danger"
              onClick={() => handleRemoveCategory(category)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskCategories;
