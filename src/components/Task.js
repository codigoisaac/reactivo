import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.important ? "important" : ""}`}>
      <div className='taskHeader'>
        <h3>{task.title}</h3>
        <div className="taskControls">
          <input onClick={() => onToggle(task.id)} type="checkbox" id="importantCheck" />
          <FaTimes className='deleteIcon'
              style={{ cursor: 'pointer'}}
              onClick={() => onDelete(task.id)} 
            />
        </div>
      </div>
      {task.note && <p>{task.note}</p>}
    </div>
  );
};

export default Task;
