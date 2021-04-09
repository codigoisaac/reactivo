import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.important ? "important" : ""}`}>
      <div className='taskHeader'>
        <input onClick={() => onToggle(task.id)} type="checkbox" id="importantCheck" style={{ cursor: 'cell' }}/>
        <h3>{task.text}</h3>
        <FaTimes
            style={{ color: "red" }}
            onClick={() => onDelete(task.id)}
          />
      </div>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
