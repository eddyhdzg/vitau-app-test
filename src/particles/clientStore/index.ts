import produce from "immer";
import create, { StateCreator } from "zustand";
import { Actions } from "./clientStore.actions";
import { Dispatch } from "./clientStore.dispatch";
import { State } from "./clientStore.state";
import reducer from "./clientStore.reducer";

// Turn the set method into an immer proxy
const immer = <T extends State>(
  config: StateCreator<T, (fn: (draft: T) => void) => void>
): StateCreator<T> => (set, get, api) =>
  config((fn) => set(produce(fn) as (state: T) => T), get, api);

export const useStore = create(
  immer((set) => ({
    count: 0,
    dispatch: (args: Actions) => set((state) => reducer(state, args)),
  }))
);
