//# Read the error // Try to understand the error
// That leads to the solution directly 99% times
// Always read the error serious
// Donot just take it as an excuse or sign to return to the code. Read understand and then see in the code to DEBUG

// const Todo = ({todos}) => {
const Todo = ({title, completed, id, dispatch}) => {
    const handleDelete = () => {
        dispatch({
            type:"DELETE_TODO",
            payload: {
                id:id
            }
        });
    }
    const handleToggle = () => {
        dispatch({
            type:"TOGGLE_COMPLETED",
            payload: {
                id:id
            }
        });
    }
  return (
    <div style={{
        fontFamily: "sans-serif",
        padding:"1rem",
        margin:"1rem",
        backgroundColor:"#cecece",
        borderRadius:"1rem",
    }}>{/* Pehla curly braces Js ki duniya main jane ke liye aur dusra curly braces object pass karne ke liye */}
      {/* {todos && todos.map(todo=><div>{todo.title}</div>)} */}
      <h4>id: {id}</h4>
      <h4 style={{
        textDecoration: completed ? "line-through" : "solid"
      }}>title: {title}</h4>
      <h4>completed: {completed ? "true" : "false"}</h4>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle Completed</button>
    </div>
  )
}

export default Todo;