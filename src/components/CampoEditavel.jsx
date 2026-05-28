import React, { useState } from "react";
import { actions } from "../actions/tarefas.action";
import { useDispatch } from "react-redux";

const CampoEditavel = ({ tarefa }) => {
  const dispatch = useDispatch();
  const [texto, setTexto] = useState(tarefa.descricao);
  const [editando, setEditando] = useState(false);

  const handleBlur = () => {
    setEditando(false);
    editarTarefa();
  };

  const handleDigitar = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setEditando(false);
      editarTarefa();
    }
  };

  const editarTarefa = () => {
    const tarefaEditada = {
      id: tarefa.id,
      descricao: texto,
    };
    dispatch(actions.editar(tarefaEditada));
  };

  if (editando) {
    return (
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleDigitar}
        className="inpEdit"
        autoFocus
      />
    );
  }
  const spanClassName = tarefa.concluida ? "txtDesc-" : "txtDesc";
  return (
    <span onClick={() => setEditando(true)} className={spanClassName}>
      {texto}
    </span>
  );
};

export default CampoEditavel;
