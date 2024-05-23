import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext"; // Assuming this context exists

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleUpdate = (id) => {
        if (!editText) return;

        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
        );
        setEditId(null);
        setEditText("");
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditText("");
    };

    const handleToggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold my-4">Todo List</h2>
            <table className="table-auto w-full">
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id} className="flex justify-between items-center w-full">
                            <td className={`p-2 ${todo.completed ? 'line-through' : ''}`}>
                                {editId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="border p-1"
                                    />
                                ) : (
                                    todo.text
                                )}
                            </td>
                            <td className="p-2 flex items-center">
                                {editId === todo.id ? (
                                    <>
                                        <button
                                            className="btn btn-xs btn-primary mr-2"
                                            onClick={() => handleUpdate(todo.id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-xs btn-error"
                                            onClick={handleCancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                            onClick={() => handleDelete(todo.id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                            onClick={() => handleEdit(todo.id, todo.text)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded"
                                            onClick={() => handleToggleComplete(todo.id)}
                                        >
                                            {todo.completed ? 'Undo' : 'Complete'}
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
