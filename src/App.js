import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

  //* toggle important
  const toggleimportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
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
    <Router>
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
                  onToggle={toggleimportant}
                />
              ) : (
                "No tasks to show."
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// todos:
// style
// change important toggling
// display 'about' button only when not in about page
// put 'go back' in place of 'about' button when in about page
// change task.date to task.note
// change task.text to task.title
