import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Make Money',
			day: 'Apr 29th at 2:30pm',
			reminder: false,
		},
		{
			id: 2,
			text: 'Make Food',
			day: 'Apr 25th at 2:30pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Make Love',
			day: 'Set 13th at 5:30am',
			reminder: false,
		}
	]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      task => task.id === id 
      ? {...task, reminder: !task.reminder}
      : task));
  }

	const addTask = (task) => {
		console.log(task);
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = {id, ...task};
		setTasks([...tasks, newTask]);
	}

	const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <Header onAddClick={() => setShowForm(!showForm)}
			showForm={showForm}/>
			{showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} />
        : 'You are all done!'}
      
    </div>
  );
}

export default App;

// todos:
// generate id with chance.js
// display tasks in order of date
// style
// change reminder toggling
// add + and x icons to add button