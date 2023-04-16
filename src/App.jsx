
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
  {id: 1, title: "complete online...", completed: false},
  {id: 2, title: "go to", completed: false},
  {id: 3, title: "10 minutes", completed: false},
  {id: 4, title: "pick up groceries", completed: false},
  {id: 5, title: "completed todo app", completed: false},
]
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

const removeTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id)
  );
};

const updateTodo = (id) => {
setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
);
};

const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
    
    <Header />

    <main className="container mx-auto px-4 mt-8">

    <TodoCreate createTodo={createTodo} />

    <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>

    <TodoComputed computedItemsLeft={computedItemsLeft}  clearCompleted={clearCompleted}/>

    <TodoFilter />

    </main>


   
    <footer className="text-center mt-8">Drag and drop to reorder list</footer>
   


    </div>
     
  
  );
};

export default App;