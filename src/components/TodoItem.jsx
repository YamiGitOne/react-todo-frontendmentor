import IconCheck from "./IconCheck";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo, removeTodo, updateTodo}) => {
const{ id, title, completed } = todo;

    return (
        <article className="flex gap-4  border-b border-b-gray-300 dark:bg-gray-800">
        <button
         className={`${
            completed
             ? 
             "grid h-5 w-5 flex-none place-items-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : 
              "inline-block h-5 w-5 flex-none rounded-full border-2"
              }`}
              onClick={() => updateTodo(id)}
              >

            {completed && <IconCheck />}
            
        </button>

        <p className={`grow text-gray-600 dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
        <button onClick={() => removeTodo(id)}>
        <CrossIcon />
        </button>
        </article>
    );
};

export default TodoItem;