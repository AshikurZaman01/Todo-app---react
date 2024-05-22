import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext"; // Assuming this context exists

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const [editId, setEditId] = useState(null); // To track currently edited todo
    const [editText, setEditText] = useState(""); // To hold edited todo text

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text); // Pre-populate edit input with existing text
    };

    const handleUpdate = (id) => {
        if (!editText) return; // Prevent empty updates

        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
        );
        setEditId(null); // Reset edit state after successful update
        setEditText(""); // Clear edit input after update
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditText(""); // Clear edit input on cancel
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold my-4">Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editId === todo.id ? ( // Render edit input if editing this todo
                            <div>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />

                                <button className="btn btn-xs btn-primary mr-2" onClick={() => handleUpdate(todo.id)}>Update</button>
                                <button className="btn btn-xs btn-error" onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                {todo.text}
                                <button className="btn btn-xs btn-error ml-10 mr-5" onClick={() => handleDelete(todo.id)}>Delete</button>
                                <button className="btn btn-xs btn-info" onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
