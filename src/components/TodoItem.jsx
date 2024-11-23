import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="row kg-row">
        <div className={`col-6 ${styles.itemContainer}`}>{todoName}</div>
        <div className={`col-4 ${styles.itemContainer}`}>{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
