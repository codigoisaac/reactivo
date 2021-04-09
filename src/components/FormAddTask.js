import { useState } from "react";

const FormAddTask = ({ onAdd }) => {
  const [text, setText] = useState(""),
    [date, setDate] = useState(""),
    [important, setimportant] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Por favor insira o título da tarefa.");
      return;
    }

    // chance.js
    const chance = require("chance").Chance();
    const id = chance.guid();

    onAdd({ text, date, important, id });

    setText("");
    setDate("");
    setimportant(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Date & Time</label>
        <input
          type="text"
          placeholder="Add Date & Time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Set important</label>
        <input
          type="checkbox"
          value={important}
          checked={important}
          onChange={(e) => setimportant(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default FormAddTask;
