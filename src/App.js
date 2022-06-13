import "./App.css";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const getTodos = () => {
    setLoading(true);

    fetch(`http://localhost:3001/tasks?_page=${page}&_limit=2`)
      .then((res) => res.json())
      .then((res) => {
        setTasks(res);
      })
      .catch((err) => {
        setError(true);
        setTasks([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTodos();
  }, [page]);

  const saveTodo = (title) => {
    let id;
    if (tasks.length === 0) {
      id = 1;
    } else {
      id = tasks[tasks.length - 1].id + 1;
    }
    const payLoad = {
      title: title,
      id: id,
    };

    setLoading(true);
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        return getTodos();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        return getTodos();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return loading ? (
    <h1>loading...</h1>
  ) : error ? (
    <h1>error</h1>
  ) : (
    <div className="App">
      <Todo saveTodo={saveTodo} tasks={tasks} deleteTask={deleteTask} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        PREVIOUS
      </button>
      <button onClick={() => setPage(page + 1)} style={{ marginLeft: "1rem" }}>
        NEXT
      </button>
    </div>
  );
}

export default App;
