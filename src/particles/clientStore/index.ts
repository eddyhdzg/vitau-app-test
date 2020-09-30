
import create, { State, StateCreator } from "zustand";
import { Actions } from "./clientStore.actions";
import { ClientDispatch } from "./clientStore.dispatch";
import { ClientState, initialClientState } from "./clientStore.state";
import reducer from "./clientStore.reducer";


/*
const immer = <T extends State>(
  config: StateCreator<T, (fn: (draft: T) => void) => void>
): StateCreator<T> => (set, get, api) =>
  config((fn) => set(produce(fn) as (state: T) => T), get, api);
*/

export const useStore = create<ClientState & any>(set => ({
	...initialClientState,
	dispatch: (args: Actions) => set((state) => reducer(state, args)),
}))