import { React, useState } from "react";
import TodoForm from "./component/TodoForm";
import "./App.css";
import Todo from "./component/Todo";

const App = () => {
  let [todos, setTodos] = useState([]);
  const [toggleAllComplete, settoggleAllComplete] = useState(true);
  const [todoToShow, setTodoToShow] = useState("all");
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodoToShow = (s) => {
    setTodoToShow(s);
  };
  const removeAllTodosThatAreComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else return todo;
      })
    );
  };
  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoToShow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }
  return (
    <div className="container">
      <TodoForm onSubmit={addTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}
      <div>
        <button
          className="update-btn  "
          onClick={() => updateTodoToShow("all")}
        >
          All
        </button>
        <button
          className="update-btn "
          onClick={() => updateTodoToShow("active")}
        >
          Active
        </button>
        <button
          className="update-btn  "
          onClick={() => updateTodoToShow("complete")}
        >
          Complete
        </button>
      </div>
      <button className="all-btn" onClick={removeAllTodosThatAreComplete}>
        Remove all complete todos
      </button>
      <button
        className="all-btn"
        onClick={() => {
          setTodos(
            todos.map((todo) => ({
              ...todo,
              complete: toggleAllComplete,
            }))
          );
          settoggleAllComplete(!toggleAllComplete);
        }}
      >
        Toggle all complete : {`${toggleAllComplete}`}
      </button>
    </div>
  );
};

export default App;
