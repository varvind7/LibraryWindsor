import actions from "./actions";

const initState = {
  bookings: [],
  booking: {},
  loading: false,
  message: null,
  errorData: {},
  modal: false,
  action:null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.MODAL_ACTION:
      return {
        ...state,
        modal: action.payload,
        action:action.type
      };
    case actions.BOOKING_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        booking: {},
        action:action.type
      };
    case actions.BOOKING_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
        modal: false,
        action:action.type
      };
    case actions.BOOKING_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action:action.type
      };
    case actions.MY_BOOKING:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        bookings: [],
        action:action.type
      };
    case actions.MY_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
        modal: false,
        action:action.type
      };
    case actions.MY_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action:action.type
      };
    case actions.TODAY_BOOKING:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        bookings: [],
        action:action.type
      };
    case actions.TODAY_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
        modal: false,
        action:action.type
      };
    case actions.TODAY_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action:action.type
      };
    case actions.CANCEL_BOOKING:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        action:action.type
      };
    case actions.CANCEL_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        action:action.type
      };
    case actions.CANCEL_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action:action.type
      };
    case actions.CANCEL_LIBRARIAN:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        action:action.type
      };
    case actions.CANCEL_LIBRARIAN_SUCCESS:
      return {
        ...state,
        loading: false,
        action:action.type
      };
    case actions.CANCEL_LIBRARIAN_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action:action.type
      };
    case actions.OCCUPIED:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        action:action.type
      };
    case actions.OCCUPIED_SUCCESS:
      return {
        ...state,
        loading: false,
        action:action.type
      };
    case actions.OCCUPIED_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        action:action.type
      };
    default:
      return state;
  }
};
