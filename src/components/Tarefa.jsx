import React from "react";
import { actions } from "../actions/tarefas.action";
import { useDispatch } from "react-redux";
import CampoEditavel from "./CampoEditavel";
const Tarefa = ({ tarefa }) => {
  const dispatch = useDispatch();
  return (
    <div className="tarefa">
      <ul>
        <li>
          <input
            type="checkbox"
            id="estado"
            name="estado"
            checked={tarefa.concluida || false}
            onChange={() => dispatch(actions.concluir(tarefa))}
          />
        </li>
        <CampoEditavel tarefa={tarefa} />
      </ul>
      <div className="btns">
        
        <button
          className="btn"
          onClick={() => dispatch(actions.remover(tarefa))}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default Tarefa;
