import actions from "./actions";

const initState = {
  feedback: {},
  loading: false,
  message: null,
  errorData: {},
  action: null,
  rooms: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.FEEDBACK_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        feedback: {},
        action: action.type
      };
    case actions.FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: action.payload,
        action: action.type
      };
    case actions.FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        errorData: action.errors || {},
        action: action.type
      };
    case actions.MY_ROOM_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        rooms: [],
        action: action.type
      };
    case actions.MY_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
        action: action.type
      };
    case actions.MY_ROOM_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action: action.type
      };
    default:
      return state;
  }
};
