import { useState } from "react";

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('')
  const handleSubmitAddTodo = (e) => {
   e.preventDefault();
   
    if (!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
   setTitle("");
  };

    return (
      <form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-800 mt-8 flex items-center gap-4 container mx-auto py-4 px-4 bg-white overflow-hidden rounded-md">
     <span className="dark:bg-gray-800 inline-block h-5 w-5 rounded-full border-2"></span>
      <input 
      className="dark:bg-gray-800 w-full text-gray-400" 
      type="text" 
      placeholder="create a new todo"
      value={title}
      onChange={(e) => setTitle(e.target.value)}  
      />
     </form>
    );
};

export default TodoCreate;