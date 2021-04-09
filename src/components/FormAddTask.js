import { useState } from "react";

const FormAddTask = ({ onAdd }) => {
  const [title, setTitle] = useState(""),
    [note, setNote] = useState(""),
    [priority, setPriority] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Por favor insira o título da tarefa.");
      return;
    }

    // chance.js
    const chance = require("chance").Chance();
    const id = chance.guid();

    onAdd({ title, note, priority, id });

    setTitle("");
    setNote("");
    setPriority(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Título</label>
        <input
          type="title"
          placeholder="Adicione o título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Notas</label>
        <input
          type="title"
          placeholder="Adicione notas para a tarefa"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <input
          type="checkbox"
          value={priority}
          checked={priority}
          onChange={(e) => setPriority(e.currentTarget.checked)}
        />
        <label>Prioridade</label>
      </div>

      <input type="submit" value="Salvar" className="btn btn-block" />
    </form>
  );
};

export default FormAddTask;
