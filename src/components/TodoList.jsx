import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        
        <div className="rounded-t-md bg-white mt-8 [&>article]:p-4">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
        </div>

    );
};
export default TodoList;