import IconCheck from "./IconCheck";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo}) => {
    return (
        <article className="flex gap-4  border-b border-b-gray-300">
       {/*  <button className="flex h-5 w-5 border-b border-b-gray-30 flex-none rounded-full">
        </button> */}

        <button className="flex h-5 w-5 border-b border-b-gray-30 flex-none rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center">
            <IconCheck />
        </button>

        <p className="grow text-gray-600">{todo.title}</p>
        <button>
        <CrossIcon />
        </button>
        </article>
    );
};

export default TodoItem;