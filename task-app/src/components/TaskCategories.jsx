import React, { useState } from "react";

const TaskCategories = ({ categories, addCategory, removeCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleAddCategory = () => {
    addCategory(categoryName);
    setCategoryName("");
  };

  return (
    <div>
      <label>
        Category Name:
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </label>
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            {category}
            <button onClick={() => removeCategory(category)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCategories;
