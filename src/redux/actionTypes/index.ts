export enum ActionType {
  SET_TOKEN_NAME_SUCCESS = "SET_TOKEN_NAME_SUCCESS",
}

interface actionSuccess {
  type: ActionType.SET_TOKEN_NAME_SUCCESS;
  payload: string;
}

export type Action = actionSuccess;
