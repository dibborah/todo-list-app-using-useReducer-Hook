//# Read the error // Try to understand the error
// That leads to the solution directly 99% times
// Always read the error serious
// Donot just take it as an excuse or sign to return to the code. Read understand and then see in the code to DEBUG

import { useTodoContext } from "./contexts/TodosProvider";

// const Todo = ({todos}) => {
// import { useContext } from "react";
  // import { TodoContext } from "./App";

const Todo = ({ title, completed, id }) => {
  // const { dispatch } = useContext(TodoContext);
  const { handleDelete, handleToggle } = useTodoContext();
 
  return (
    <div style={{
      fontFamily: "sans-serif",
      padding: "1rem",
      margin: "1rem",
      backgroundColor: "#cecece",
      borderRadius: "1rem",
    }}>{/* Pehla curly braces Js ki duniya main jane ke liye aur dusra curly braces object pass karne ke liye */}
      {/* {todos && todos.map(todo=><div>{todo.title}</div>)} */}
      <h4>id: {id}</h4>
      <h4 style={{
        textDecoration: completed ? "line-through" : "solid"
      }}>title: {title}</h4>
      <h4>completed: {completed ? "true" : "false"}</h4>
      <button onClick={()=>handleDelete(id)}>Delete</button>
      <button onClick={()=>handleToggle(id)}>Toggle Completed</button>
    </div>
  )
}

export default Todo;