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

  //* toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
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
                  onToggle={toggleReminder}
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
// change reminder toggling
// display 'about' button only when not in about page
// put 'go back' button in place of 'about' button when in about page
// change 'reminder' to 'important'
