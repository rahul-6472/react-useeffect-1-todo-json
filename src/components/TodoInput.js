import { useState } from "react";

const TodoInput = ({ saveTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <div style = {{marginBottom:"1.2rem"}}>
      <input 
        type="text"
        placeholder="add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => saveTodo(title)}>Save</button>
    </div>
  );
};

export default TodoInput;
