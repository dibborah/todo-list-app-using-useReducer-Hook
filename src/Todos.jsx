import Todo from "./Todo";

const Todos = ({ todos,dispatch }) => {
  return (
    <div>
      {/* <Todo key={todos.id} todos={todos}/> */}
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} dispatch = {dispatch}/>
      ))}
    </div>
  )
}

export default Todos;