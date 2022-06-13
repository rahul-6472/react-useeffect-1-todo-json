import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const Todo = ({ saveTodo,tasks,deleteTask }) => {
  return (
    <div>
      <TodoInput saveTodo={saveTodo} />
      <TodoList tasks = {tasks} deleteTask = {deleteTask}/>
    </div>
  );
};

export default Todo;
