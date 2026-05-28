import { actionsTypes } from "../constantes/tarefas";
let INITIAL_STATE;
if (JSON.parse(localStorage.getItem("initialState")) != null) {
  INITIAL_STATE = JSON.parse(localStorage.getItem("initialState"));
} else {
  INITIAL_STATE = {
    tarefas: [],
    filtro: "todos",
  };
}

const salvarLocal = (dados) => {
  localStorage.setItem("initialState", JSON.stringify(dados));
  return dados;
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADICIONAR_TAREFA:
      return salvarLocal({
        ...state,
        tarefas: [...state.tarefas, { ...action.payload }],
      });
    case actionsTypes.REMOVER_TAREFA:
      return salvarLocal({
        ...state,
        tarefas: state.tarefas.filter((x) => x.id !== action.payload.id),
      });
    case actionsTypes.EDITAR_TAREFA:
      return salvarLocal({
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload.id
            ? { ...state, ...tarefa, descricao: action.payload.descricao }
            : tarefa,
        ),
      });
    case actionsTypes.FILTRAR_TAREFA:
      return salvarLocal({
        ...state,
        filtro: action.payload,
      });
    case actionsTypes.CONCLUIR_TAREFA:
      return salvarLocal({
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload.id
            ? { ...state, ...tarefa, concluida: !tarefa.concluida }
            : tarefa,
        ),
      });
    default:
      return state;
  }
};

export { reducers };
