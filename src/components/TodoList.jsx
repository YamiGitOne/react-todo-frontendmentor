import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        
        <Droppable droppableId="todos">
            {
                (droppableProvided) => (
                    <div 
                    ref={droppableProvided.innerRef} 
                    {...droppableProvided.droppableProps} 
                    className="rounded-t-md bg-white overflow-hidden mt-8 dark:bg-gray-700 [&>article]:p-4">

                    {todos.map((todo, index) => (
                        <Draggable 
                        key={todo.id} 
                        index={index} 
                        draggableId={`${todo.id}`}>
                            {(draggableProvided) => (
                                <TodoItem 
                                todo={todo} 
                                removeTodo={removeTodo} 
                                updateTodo={updateTodo} 
                                ref={draggableProvided.innerRef} 
                                {...draggableProvided.dragHandleProps} 
                                {...draggableProvided.draggableProps} 
                                />
                                )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholders}
                    </div>
                )
            }
        </Droppable>
       

    );
};
export default TodoList;