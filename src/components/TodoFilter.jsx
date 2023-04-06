const TodoFilter = () => {
    return (
        <section className="container mx-auto mt-8">
        <div className="flex justify-center bg-white p-4 rounded-md gap-4">
        <button className="text-blue-600">all</button>
          <button className="hover:text-blue-600">active</button>
          <button className="hover:text-blue-600">complete</button>
        </div>
        </section>
    );
};
export default TodoFilter;