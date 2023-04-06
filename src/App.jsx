
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

import TodoFilter from "./components/TodoFilter";


const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
    
    <Header />

    <main className="container mx-auto px-4 mt-8">

    <TodoCreate />

    {/* esta dando error <TodoList /> */}

    <TodoComputed />

    <TodoFilter />

    </main>


   
    <footer className="text-center mt-8">Drag and drop to reorder list</footer>
   


    </div>
     
  
  );
};

export default App;