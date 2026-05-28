import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/tarefas.action";

const AdicionarTarefa = () => {
  const [descricao, setDescricao] = useState("");

  const dispatch = useDispatch();

  const adicionarTarefa = (event) => {
    event.preventDefault();

    const tarefa = {
      id: new Date(),
      descricao,
    };

    dispatch(actions.adicionar(tarefa));

    console.log("Adicionar Tarefa", tarefa);
  };

  return (
    <form onSubmit={adicionarTarefa} className="addTarefa">
      <input
        type="text"
        name={descricao}
        placeholder="Tarefa"
        required
        onChange={(event) => setDescricao(event.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionarTarefa;
