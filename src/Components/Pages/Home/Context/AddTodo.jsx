import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const AddTodo = () => {

    const [todoText, setTodoText] = useState("");
    const { todos, setTodos } = useContext(TodoContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = { id: Date.now().toString(), text: todoText, completed: false }
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        setTodoText('');

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center mb-4">
                <input
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    type="text"
                    placeholder="Add a new todo"
                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent w-full"
                />
                <button type="submit" className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;