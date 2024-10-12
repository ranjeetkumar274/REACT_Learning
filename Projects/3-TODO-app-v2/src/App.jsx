import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import './App.css';
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      name : "Buy Milk",
      dueDate : "04/10/2003",
    },
    {
      name : "Go to College",
      dueDate : "07/10/2023",
    },
    {
      name : "Like this video",
      dueDate : "right now",
    },
    {
      name : "hello task",
      dueDate : "right now",
    },
  ];

  return (<center className='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>);
}

export default App
