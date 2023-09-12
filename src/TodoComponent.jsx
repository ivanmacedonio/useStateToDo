import React from "react";
import "./styles/TodoComponent.css";
import { useState } from "react";

export const TodoComponent = ({ task, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewValue(value)
  };

  const handleUpdate = (e) => {
    
    onUpdate(task.id, newValue)
    setIsEdit(false)
  };

  return (
    <>
      <div className="todo">
        {isEdit ? (
          <div>
            <h1>Modo edicion</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange}  value={newValue}/>
              <button className="Update" onClick={handleUpdate}>
                Update
              </button>
            </form>
          </div>
        ) : (
          <div key={task.id}>
            {task.title}
            <button className="Delete" onClick={() => onDelete(task.id)}>
              Delete
            </button>
            <button className="Update" onClick={() => setIsEdit(true)}>
              Update
            </button>
          </div>
        )}
      </div>
    </>
  );
};
