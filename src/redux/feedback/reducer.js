import actions from "./actions";

const initState = {
  feedbacks: [],
  feedback: {},
  loading: true,
  message: null,
  errorData: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.NEW_FEEDBACK_LISTING:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        feedbacks: []
      };
    case actions.NEW_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedbacks: action.payload || []
      };
    case actions.NEW_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case actions.FEEDBACK_DETAILS:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        feedback: {}
      };
    case actions.FEEDBACK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: action.payload
      };
    case actions.FEEDBACK_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
