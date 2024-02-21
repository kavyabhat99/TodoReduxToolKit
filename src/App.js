import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App p-[100px]">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
