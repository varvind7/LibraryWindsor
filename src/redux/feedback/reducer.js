import actions from "./actions";

const initState = {
  feedback: {},
  loading: false,
  message: null,
  errorData: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.FEEDBACK_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        feedback: {}
      };
    case actions.FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: action.payload,
      };
    case actions.FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        errorData: action.errors || {}
      };
    default:
      return state;
  }
};
