import { useState } from "react";

const FormAddTask = ({ onAdd }) => {
  const [title, settitle] = useState(""),
    [note, setnote] = useState(""),
    [important, setimportant] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Por favor insira o título da tarefa.");
      return;
    }

    // chance.js
    const chance = require("chance").Chance();
    const id = chance.guid();

    onAdd({ title, note, important, id });

    settitle("");
    setnote("");
    setimportant(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Título</label>
        <input
          type="title"
          placeholder="Add Task"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Notas</label>
        <input
          type="title"
          placeholder="Add note & Time"
          value={note}
          onChange={(e) => setnote(e.target.value)}
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
