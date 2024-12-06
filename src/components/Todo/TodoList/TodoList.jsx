import TodoItem from "../TodoItem/TodoItem.jsx";
import {TodoListSelector} from "../../../reducers/todolist.slice.js";
import {useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector(TodoListSelector);

    return <>
        <div className="card">
            {todos.length > 0 ? todos.map(todo => (
                <TodoItem key={todo["_id"]} todo={todo} onEdit={() => null} onDelete={()=> null} />
            )): <div>Nessun elemento presente</div>}
        </div>
    </>
}

export default TodoList;