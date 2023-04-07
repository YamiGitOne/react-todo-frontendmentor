import CrossIcon from "./icons/CrossIcon";
const TodoList = () => {
    return (
        <div className="rounded-t-md bg-white mt-8 [&>article]:p-4">
        <article className="flex gap-4  border-b border-b-gray-300">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">complete javascript...</p>
        <button>
        <CrossIcon />
        </button>
        </article>

        <article className="flex gap-4  border-b border-b-gray-300">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">complete javascript...</p>
        <button>
        <CrossIcon />
        </button>
        </article>

        <article className="flex gap-4  border-b border-b-gray-300">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">complete javascript...</p>
        <button>
        <CrossIcon />
        </button>
        </article>

    </div>
    );
};
export default TodoList;