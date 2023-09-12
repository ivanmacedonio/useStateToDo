import { useState } from "react";
import "./styles/App.css";
import { TodoComponent } from "./TodoComponent";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const handleInput = ({ target }) => {
    setTitle(target.value);
    setInputValue(target.value)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: inputValue,
      completed: false,
    };

    const test = todos.find(item => item.title === title)
    if (test === undefined){
      setTodos([...todos, newTodo]);
      setInputValue('')
    } else {
      alert('titulo no valido')
    }
    
    
  };

  const handleDelete = (id) => {
    const temp = todos.filter(item => item.id !== id)
    setTodos(temp)
  }


  const handleUpdate = (id, value) => {
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.title = value
    setTodos(temp)
  }
  return (
    <>
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleInput}
            className="buttonCreate"
          />
          <input type="submit" />
        </form>

        <div>
          {todos.map((item) => (
            <TodoComponent task={item} onUpdate={handleUpdate} onDelete={handleDelete}></TodoComponent>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
