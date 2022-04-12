import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const setToken = (tokenName: string) => {
  return async (dispatch: Dispatch<Action>) => {
    
    dispatch({
      type: ActionType.SET_TOKEN_NAME_SUCCESS,
      payload: tokenName,
    });
  };
};
