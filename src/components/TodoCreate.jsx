const TodoCreate = () => {
    return (
      <form className="mt-8 flex items-center gap-4 container mx-auto py-4 px-4 bg-white overflow-hidden rounded-md">
     <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input className="w-full text-gray-400" type="text" placeholder="create a new todo"></input>
     </form>
    );
};

export default TodoCreate;