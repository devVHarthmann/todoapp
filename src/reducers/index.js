import { combineReducers } from "redux";
import { reducers as tarefaReducers } from "./tarefa.reducer";

const reducers = combineReducers({
  tarefaReducers,
});

export { reducers };
