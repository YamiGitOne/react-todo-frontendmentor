import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo}) => {
    return (
        <article className="flex gap-4  border-b border-b-gray-300">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">{todo.title}</p>
        <button>
        <CrossIcon />
        </button>
        </article>
    );
};

export default TodoItem;