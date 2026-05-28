import React, { useState } from "react";
import { actions } from "../actions/tarefas.action";
import { useDispatch } from "react-redux";

const Filtros = () => {
  const dispatch = useDispatch();

  const filtro = (opcao) => {
    switch (opcao) {
      case "todas":
        dispatch(actions.filtrar("todas"));
        console.log("t")
        break;
      case "concluidas":
        dispatch(actions.filtrar("conc"));
        console.log("c")
        break;
      case "pendentes":
        dispatch(actions.filtrar("pend"));
        console.log("p")
        break;
    }
  };
  return (
    <div className="filterContainer">
      <button
        value="todas"
        className="filterBox"
        onClick={(e) => filtro(e.target.value)}
      >
        Todas
      </button>
      <button
        value="concluidas"
        className="filterBox"
        onClick={(e) => filtro(e.target.value)}
      >
        Concluídas
      </button>
      <button
        value="pendentes"
        className="filterBox"
        onClick={(e) => filtro(e.target.value)}
      >
        Pendentes
      </button>
    </div>
  );
};

export default Filtros;
