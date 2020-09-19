import { Actions } from "./clientStore.actions";

export type Dispatch = {
  dispatch: (action: Actions) => void;
};
