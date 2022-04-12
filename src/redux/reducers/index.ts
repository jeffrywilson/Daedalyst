import { Action, ActionType } from "../actionTypes/index";

interface State {
  name: string | null;
}

const initialState = {
  name: "SOL",
};

const colorReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_TOKEN_NAME_SUCCESS:
      return {
        name: action.payload,
      };

    default:
      return state;
  }
};

export default colorReducer;
