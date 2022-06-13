import { FaTimes } from "react-icons/fa";
const TodoList = ({ tasks,deleteTask }) => {
  return (
    <div>
      {tasks.map((todo) => (
        <div
        key = {todo.id}
          style={{
            width: "30%",
            marginBottom: "1.2rem",
            border: "1px solid #cecece",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "left" }}>{todo.title}</h3>{" "}
          <p>
            <FaTimes
              onClick={() => deleteTask(todo.id)}
              style={{ color: "red", marginLeft: "5rem", cursor: "pointer" }}
            />
          </p>
        </div>
      ))}

    </div>
  );
};

export default TodoList;
