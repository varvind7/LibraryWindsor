import actions from "./actions";

const initState = {
  user: {},
  loading: true,
  message: null,
  errorData: {},
  details: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.ROOM_BOOKING_LISTING:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        user: {}
      };
    case actions.ROOM_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case actions.ROOM_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        errorData: action.errors || {}
      };
      default:
      return state;
};
}
