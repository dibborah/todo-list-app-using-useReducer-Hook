import { useContext, useReducer } from 'react';
import AddTodoForm from './AddTodoForm';
import Todos from './Todos';
import './App.css'
import { createContext } from 'react';
import TodosProvider from './contexts/TodosProvider';

// export const TodoContext = createContext();
// const TodoContext = createContext();

function App() {
  return (
    <TodosProvider>
      {/* <AddTodoForm dispatch = {dispatch}/> */}
      <AddTodoForm />
      {/* <Todos todos={todos} dispatch={dispatch} /> */}
      <Todos />
    </TodosProvider>
  )
}

export default App;
// export { TodoContext };
