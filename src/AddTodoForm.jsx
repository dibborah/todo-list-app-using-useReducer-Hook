// since hum "VITE" use kar rahe hain to mandatory hain ki hum ".jsx" extension use kare
// ".js" extension use nhi kar skte

import { useState } from "react";

const AddTodoForm = ({dispatch}) => {
  const [title,setTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    if(title.trim().length===0){
      alert("Please enter something before submiting it!!!")
    }
    const newTodo = {
      title: title,
      completed: false,
      id: crypto.randomUUID(),
    }
    dispatch({
      type:"ADD_TODO",
      payload: {// In payload mostly data is passed as an object while creating real-world applications, so I am passing data as an object format which is not at all necessary but is useful
        newTodo: newTodo
      }
    })
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
        onChange={(e)=>setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodoForm;