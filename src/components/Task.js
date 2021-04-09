import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.important ? "important" : ""}`}>
      <div className='taskHeader'>
        <h3>{task.text}</h3>
        <input onClick={() => onToggle(task.id)} type="checkbox" id="importantCheck" />
        <FaTimes
            style={{ color: "red", cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
          />
      </div>
      {task.date && <p>{task.date}</p>}
    </div>
  );
};

export default Task;
