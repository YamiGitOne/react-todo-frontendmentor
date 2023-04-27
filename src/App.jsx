import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter";
import { useState, useEffect } from "react";

/* const initialStateTodos = [
  {id: 1, title: "complete online...", completed: true},
  {id: 2, title: "go to", completed: false},
  {id: 3, title: "10 minutes", completed: false},
  {id: 4, title: "pick up groceries", completed: false},
  {id: 5, title: "completed todo app", completed: false},
] */

//con esta linea sustituyo los datos anteriores para que javascript reciba o lea y entienda las tareas guardadas o eliminadas y las muestre 
//el condicional || [] devuelve un array vacio en caso de que nohaya dato relacionado con "todos"
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  //este hook esta atento a los cambios en los "todos" y los almacena o envia como un string en el localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  //console.log("todos");
  },[todos]);




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

const[filter, setFilter] = useState("all");
const changeFilter = (filter) => setFilter(filter)
const filteredTodos = () =>{
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
      return todos;  
}
}

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
    
    <Header />

    <main className="container mx-auto px-4 mt-8 md:max-w-xl">

    <TodoCreate createTodo={createTodo} />

    <DragDropContext>
    <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </DragDropContext>
    <TodoComputed computedItemsLeft={computedItemsLeft}  clearCompleted={clearCompleted}/>
    

    <TodoFilter changeFilter={changeFilter} />

    </main>


   
    <footer className="dark:bg-gray-400 text-center mt-8">Drag and drop to reorder list</footer>
   


    </div>
     
  
  );
};

export default App;