import React from "react";
import Tarefa from "./Tarefa";
import AdicionarTarefa from "./AdicionarTarefa";
import { useSelector } from "react-redux";
import Filtros from "./Filtro";
const ListaTarefas = () => {
  const tarefas = useSelector((state) => state.tarefaReducers.tarefas);
  const filtro = useSelector((state) => state.tarefaReducers.filtro);
  let exibir = [...tarefas]
   switch (filtro) {
      case "todas":
        break;
      case "conc":
        exibir = tarefas.filter((x) => x.concluida === true)
        console.log("c")
        break;
      case "pend":
        exibir = tarefas.filter((x) => x.concluida !== true)
        console.log("p")
        break;
    }

  return (
    <div className="listaTarefas">
      <h1>Lista de Tarefas</h1>

      <AdicionarTarefa />
      <Filtros />
      {exibir.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </div>
  );
};

export default ListaTarefas;
