import actions from "./actions";

const initState = {
  rooms: [],
  room: {},
  loading: true,
  message: null,
  errorData: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.ROOM_BOOKING_LISTING:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        rooms: []
      };
    case actions.ROOM_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload || []
      };
    case actions.ROOM_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case actions.ROOM_DETAILS:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        room: {}
      };
    case actions.ROOM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        room: action.payload
      };
    case actions.ROOM_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
