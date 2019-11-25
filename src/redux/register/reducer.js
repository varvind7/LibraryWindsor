import actions from "./actions";

const initState = {
  user: {},
  loading: false,
  message: null,
  errorData: {},
  details: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        user: {}
      };
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case actions.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        errorData: action.errors || {}
      };
    case actions.CHECK_TOKEN_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        details: {}
      };
    case actions.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload
      };
    case actions.CHECK_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    default:
      return state;
  }
};
