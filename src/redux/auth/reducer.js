import actions from "./actions";

const initState = {
  user: {},
  token: null,
  loading: false,
  message: null,
  errorData: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        token: null
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        token: action.token
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        token: null,
        loading: false,
        message: action.payload,
        errorData: action.errors || {}
      };
    case actions.GET_USER:
      return {
        ...state
      };
    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case actions.GET_USER_ERROR:
      return {
        ...state,
        user: {},
        message: action.payload
      };
    case actions.LOGOUT:
      return { ...state };
    case actions.LOGOUT_SUCCESS:
      return { ...initState };
    case actions.LOGOUT_ERROR:
      return { ...state };
    default:
      return state;
  }
};
