import actions from "./actions";

const initState = {
  bookings: [],
  booking: {},
  loading: false,
  message: null,
  errorData: {},
  modal: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.MODAL_ACTION:
      return {
        ...state,
        modal: action.payload
      };
    case actions.BOOKING_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        booking: {}
      };
    case actions.BOOKING_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
        modal: false
      };
    case actions.BOOKING_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    default:
      return state;
  }
};
