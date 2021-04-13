import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import FormAddTask from "./components/FormAddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const savedTasks = JSON.parse(localStorage.getItem("reactivo-tasks")) || [];

  const [tasks, setTasks] = useState(savedTasks);
  save();

  //* add
  const addTask = (task) => {
    setTasks([...tasks, task]);
    save();
  };

  //* delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    save();
  };

  //* toggle priority
  const togglePriority = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority: !task.priority } : task
      )
    );
    save();
  };

  //* save
  function save() {
    localStorage.setItem("reactivo-tasks", JSON.stringify(tasks));
  }

  const [showForm, setShowForm] = useState(false);

  //* render
  return (
    <BrowserRouter basename="/reactivo">
      <div className="container">
        <Header onAddClick={() => setShowForm(!showForm)} showForm={showForm} />

        <Route
          path="/"
          exact
          render={() => (
            <>
              {showForm && <FormAddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={togglePriority}
                />
              ) : (
                "Use o botão acima para criar tarefas."
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
