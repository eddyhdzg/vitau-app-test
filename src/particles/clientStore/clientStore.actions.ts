interface IncreaseCounter {
  type: "INCREASE_COUNTER";
}

export interface DecreaseCounter {
  type: "DECREASE_COUNTER";
}

export type Actions = IncreaseCounter | DecreaseCounter;
