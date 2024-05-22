import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const cancelTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div>
            <div>
                <h1 className='text-2xl font-semibold text-green-600'>Todo List</h1>
                <hr className='w-1/3 my-2' />
            </div>

            <div>
                <table className='table-auto w-full'>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id} className='flex justify-between items-center w-full'>
                                <td className={`p-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</td>
                                <td className='p-2'>
                                    <button
                                        className='bg-red-500 text-white px-2 py-1 rounded mr-2'
                                        onClick={() => deleteTodo(todo.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className='bg-yellow-500 text-white px-2 py-1 rounded'
                                        onClick={() => cancelTodo(todo.id)}
                                    >
                                        {todo.completed ? 'Undo' : 'Complete'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;
