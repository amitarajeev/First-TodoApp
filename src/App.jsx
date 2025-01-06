import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the list of to-dos (array of objects, each object represents a to-do)
  const [todos, setTodos] = useState([]);
  // State to store the current input value for the new to-do item
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new to-do item to the list
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, isDone: false }]); // Add a new to-do object with `isDone` as `false`
      setNewTodo(""); // Clear the input field after adding the new to-do
    }
  };

  // Function to toggle the "done" status of a to-do
  const toggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone; // Toggle the `isDone` status
    setTodos(updatedTodos); // Update the `todos` state
  };

  // Function to remove a to-do item from the list
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Filter out the selected to-do item
  };

  return (
    <div className="App"> {/* Parent container for the app */}
      <h1>My To-Do App</h1> {/* Main title for the app */}

      {/* Input box and button for adding new to-do items */}
      <div className="input-box">
        <input
          type="text"
          value={newTodo} // Bind the input value to the `newTodo` state
          onChange={(e) => setNewTodo(e.target.value)} // Update `newTodo` when the user types
          placeholder="Enter a to-do" // Placeholder text for the input field
        />
        <button onClick={addTodo}>Add To-Do</button> {/* Button to add the new to-do */}
      </div>

      {/* To-Do List */}
      <div className="todo-container">
        <h2>To-Do List</h2> {/* Title for the to-do list */}
        {todos.length === 0 ? (
          <p>No tasks added yet!</p> // Display this message if the list is empty
        ) : (
          todos.map((todo, index) => ( // Iterate over each to-do in the `todos` list
            <div key={index} className="todo-item"> {/* Container for each to-do */}
              <input
                type="checkbox" // Checkbox to mark the to-do as done
                checked={todo.isDone} // Checkbox is checked if the to-do is marked as done
                onChange={() => toggleDone(index)} // Call `toggleDone` when the checkbox is clicked
                title="Mark as done" // Tooltip for the checkbox
              />
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none", // Apply line-through if `isDone` is true
                  color: todo.isDone ? "#888" : "#fff", // Change color to gray if `isDone` is true
                }}
              >
                {todo.text}
              </span>
              <span
                className="close" // Close button to remove the to-do
                onClick={() => removeTodo(index)} // Call `removeTodo` when the close button is clicked
              >
                &times; {/* Multiplication symbol (X) for the close button */}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
