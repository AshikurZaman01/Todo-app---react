import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = (props) => {

    const [todos, setTodos] = useState([
        { id: 1, text: 'kola', completed: false },
        { id: 2, text: 'lau', completed: false }
    ]);



    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {props.children}
        </TodoContext.Provider>
    )

}