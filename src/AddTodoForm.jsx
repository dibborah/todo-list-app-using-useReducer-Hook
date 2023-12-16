// since hum "VITE" use kar rahe hain to mandatory hain ki hum ".jsx" extension use kare
// ".js" extension use nhi kar skte

import { useState } from "react";
import { useTodoContext } from "./contexts/TodosProvider";
// import { useContext } from "react";
// import { TodoContext } from "./App";

const AddTodoForm = () => {
  const [ title, setTitle ] = useState("");
  // const { dispatch } = useContext(TodoContext);
  const { addNewTodo } = useTodoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    if (title.trim().length === 0) {
      alert("Please enter something before submiting it!!!")
    }
    const newTodo = {
      title: title,
      completed: false,
      id: crypto.randomUUID(),
    }

    addNewTodo(newTodo);
   
    setTitle("");
    // console.log(newTodo);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodoForm;