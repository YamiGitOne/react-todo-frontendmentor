import IconCheck from "./IconCheck";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo}) => {
const{ id, title, completed } = todo;

    return (
        <article className="flex gap-4  border-b border-b-gray-300">
       {/*  <button className="flex h-5 w-5 border-b border-b-gray-30 flex-none rounded-full">
        </button> */}
        <button
         className={`${
            completed
             ? 
             "grid h-5 w-5 flex-none place-items-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : 
              "inline-block h-5 w-5 flex-none rounded-full border-2"
              }`}
              >
            {completed && <IconCheck />}
            
        </button>

        <p className="grow text-gray-600">{title}</p>
        <button>
        <CrossIcon />
        </button>
        </article>
    );
};

export default TodoItem;