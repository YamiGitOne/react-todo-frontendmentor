const TodoComputed = ({computedItemsLeft,clearCompleted}) => {
    return (
        <section className="dark:bg-gray-700 py-4 px-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{computedItemsLeft} items</span>
        <button className="text-gray-400" onClick={clearCompleted}>clear completed
        </button>
      </section> 
    );
};

export default TodoComputed;