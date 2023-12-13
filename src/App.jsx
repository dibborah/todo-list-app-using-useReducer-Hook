import { useReducer } from 'react';
import AddTodoForm from './AddTodoForm';
import Todos from './Todos';
import './App.css'

const reducer = (todos, action) => {//reducer function ka ek rule hain ki ya to ye state return karega ya phir koi error throw karega
  // if statement ke jagah main hum switch case v use kar skte hain jo hum aage project main sikhenge
  if(action.type === "DELETE_TODO") {
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
  if(action.type === "ADD_TODO") {    
    return [...todos, action.payload.newTodo];
  }
  if(action.type === "TOGGLE_COMPLETED") {
    console.log("toggling...");
    return todos.map(todo => {
      if(todo.id === action.payload.id){
        return {...todo, completed: !todo.completed};
      }else{
        return todo;
      }
    });
    // return todos;
  }
  if(action.type === "ADD_TODO"){
    return todos.map(todo=> ({...todo, title: payload.title}))
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

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <h1>Hello Universe!!!</h1>
      <AddTodoForm dispatch = {dispatch}/>
      <Todos todos={todos} dispatch={dispatch} />
    </>
  )
}

export default App;
