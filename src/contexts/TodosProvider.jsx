// This is the "PROVIDER COMPONENT"

// Using this component we can simplyfy the code for convinience
// This is not mandatory and is just for convinience and also w/o this once can create and use contexts

import { createContext, useContext, useReducer } from "react";
const TodosContext = createContext();

const reducer = (todos, action) => {//reducer function ka ek rule hain ki ya to ye state return karega ya phir koi error throw karega
  // if statement ke jagah main hum switch case v use kar skte hain jo hum aage project main sikhenge
  if (action.type === "DELETE_TODO") {
    // const newState = [];
    // for(let todo of todos){
    //   if(todo.id !== action.payload.id){
    //     newState.push(todo);
    //   }
    // }
    // return newState;

    //Using higher order function (filter)
    return todos.filter(todo => todo.id !== action.payload.id);
  }
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }
  if (action.type === "TOGGLE_COMPLETED") {
    console.log("toggling...");
    return todos.map(todo => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    // return todos;
  }
  if (action.type === "ADD_TODO") {
    return todos.map(todo => ({ ...todo, title: payload.title }))
  }
  alert("Invalid action type")
  return todos;
  // throw new Error("Invalid beta/beti");// Can also throw error
  // throw Error("Invalid beta/beti");// We can also throw error is action type doesnot match anything on the reducer function
}

const initialTodos = [
  { id: "1", title: "teach students", completed: "true" },
  { id: "2", title: "edit videos", completed: "false" },
  { id: "3", title: "play guitar ", completed: "false" }
]

const TodosProvider = ({children}) => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id: id
      }
    });
  }
  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: {
        id: id
      }
    });
  }
  const addNewTodo = (newTodo) => {
    dispatch({
        type: "ADD_TODO",
        payload: {// In payload mostly data is passed as an object while creating real-world applications, so I am passing data as an object format which is not at all necessary but is useful
          newTodo: newTodo
        }
    })
  }
   
  return (
    <TodosContext.Provider value={{todos, handleDelete, handleToggle, addNewTodo}}>
        {children}
    </TodosContext.Provider>
  )
}

export const useTodoContext = () => {
  return useContext(TodosContext);
}

export default TodosProvider;