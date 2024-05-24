import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const TodoList = () => {

    const { todos, setTodos } = useContext(TodoContext);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleDelete = (id) => {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    }

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    }

    const handleUpdate = (id) => {
        if (!editText) {
            return editText;
        } else {
            setTodos((prevTodo) => prevTodo.map((todo) => todo.id === id ? { ...todo, text: todo.text } : todo));
        }
        setEditId(null);
        setEditText('');
    }

    const handleCancelEdit = () => {
        setEditId(null);
        setEditText('');
    }

    const handleToggleComplete = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    return (
        <div>
            <table className="table-auto w-full">

                <tbody>
                    {
                        todos.map((todo) => (
                            <tr key={todo.id} className="flex justify-between items-center w-full">
                                <td className={`${todo.completed ? 'line-through' : ""}`}>

                                    {todo.id === editId ? (
                                        <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} name="" id="" className="bg-blue-200" />
                                    ) :
                                        (todo.text)}
                                </td>

                                <td className="p-2 flex items-center">
                                    {todo.id === editId ? (
                                        <>
                                            <button className="btn btn-xs btn-neutral" onClick={() => handleUpdate(todo.id)}>Update</button>

                                            <button className="btn btn-xs btn-neutral" onClick={handleCancelEdit}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn btn-xs btn-neutral" onClick={() => handleDelete(todo.id)}>Delete</button>

                                            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>

                                            <button className={`btn btn-xs ${todo.completed ? "btn-accent" : "btn-warning"}`} onClick={() => handleToggleComplete(todo.id)}>{todo.completed ? "Undo" : "Completed"}</button>


                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default TodoList;