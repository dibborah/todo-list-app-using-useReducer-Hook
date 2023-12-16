import Todo from "./Todo";
import { useTodoContext } from "./contexts/TodosProvider";
// import { useContext } from "react";
// import { TodoContext } from "./App";

const Todos = () => {
  // const { todos, dispatch } = useContext(TodoContext);
  const { todos } = useTodoContext();

  return (
    <div>
      {/* <Todo key={todos.id} todos={todos}/> */}
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default Todos;