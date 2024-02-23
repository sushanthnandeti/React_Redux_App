
import './App.css';
import GetTodos from "./components/GetTodos.js";
import AddTodo from "./components/AddTodo.js";


function App() {
  return (
    <div className="App">
      <AddTodo />
      <GetTodos />
    
    </div>
  );
}

export default App;
