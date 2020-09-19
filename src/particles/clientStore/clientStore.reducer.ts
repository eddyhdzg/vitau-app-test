import produce from "immer";
import { Actions } from "./clientStore.actions";
import { State } from "./clientStore.state";

const reducer = (state: State, action: Actions) => {
  const { type } = action;

  switch (type) {
    case "INCREASE_COUNTER":
      state.count++;
      break;
    case "DECREASE_COUNTER":
      state.count--;
      break;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;
