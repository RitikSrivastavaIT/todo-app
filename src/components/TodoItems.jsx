import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className="container">
      {todoItems.map((items) => (
        <TodoItem
          key={`${items.name}-${items.date}`}
          todoName={items.name}
          todoDate={items.date}
        />
      ))}
    </div>
  );
};

export default TodoItems;
