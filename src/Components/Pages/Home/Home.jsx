import AddTodo from "./Context/AddTodo";
import TodoList from "./Context/TodoList";
import { TodoProvider } from "./TodoContext";

const Home = () => {
    return (
        <TodoProvider>
            <div className="flex justify-center items-center h-screen">

                <div className="space-y-5 w-[500px] p-10 shadow-md shadow-gray-500 rounded-md">
                    <h1 className="text-3xl font-semibold">Todo Application </h1>

                    <AddTodo></AddTodo>
                    <TodoList></TodoList>
                </div>
            </div>
        </TodoProvider>
    );
};

export default Home;