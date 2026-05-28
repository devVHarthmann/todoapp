import { actionsTypes } from "../constantes/tarefas";

const actions = {
  adicionar: (tarefa) => ({
    type: actionsTypes.ADICIONAR_TAREFA,
    payload: tarefa,
  }),
  remover: (tarefa) => ({
    type: actionsTypes.REMOVER_TAREFA,
    payload: tarefa,
  }),
  editar: (tarefa) => ({
    type: actionsTypes.EDITAR_TAREFA,
    payload: tarefa,
  }),
  filtrar: (filtro) => ({
    type: actionsTypes.FILTRAR_TAREFA,
    payload: filtro,
  }),
  concluir: (tarefa) => ({
    type: actionsTypes.CONCLUIR_TAREFA,
    payload: tarefa,
  }),
};

export { actions };
