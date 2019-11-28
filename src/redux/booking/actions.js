const actions = {
  BOOKING_REQUEST: "BOOKING_REQUEST",
  BOOKING_REQUEST_SUCCESS: "BOOKING_REQUEST_SUCCESS",
  BOOKING_REQUEST_FAILURE: "BOOKING_REQUEST_FAILURE",

  MY_BOOKING: "MY_BOOKING",
  MY_BOOKING_SUCCESS: "MY_BOOKING_SUCCESS",
  MY_BOOKING_FAILURE: "MY_BOOKING_FAILURE",

  CANCEL_BOOKING: "CANCEL_BOOKING",
  CANCEL_BOOKING_SUCCESS: "CANCEL_BOOKING_SUCCESS",
  CANCEL_BOOKING_FAILURE: "CANCEL_BOOKING_FAILURE",

  CANCEL_LIBRARIAN: "CANCEL_LIBRARIAN",
  CANCEL_LIBRARIAN_SUCCESS: "CANCEL_LIBRARIAN_SUCCESS",
  CANCEL_LIBRARIAN_FAILURE: "CANCEL_LIBRARIAN_FAILURE",

  TODAY_BOOKING: "TODAY_BOOKING",
  TODAY_BOOKING_SUCCESS: "TODAY_BOOKING_SUCCESS",
  TODAY_BOOKING_FAILURE: "TODAY_BOOKING_FAILURE",

  OCCUPIED: "OCCUPIED",
  OCCUPIED_SUCCESS: "OCCUPIED_SUCCESS",
  OCCUPIED_FAILURE: "OCCUPIED_FAILURE",

  MODAL_ACTION: "MODAL_ACTION",

  modalAction: (payload = false) => ({
    type: actions.MODAL_ACTION,
    payload
  }),

  /**
   * Request booking
   *
   * @param      {Object}  [payload={}]
   */
  bookingRequest: (payload = {}) => ({
    type: actions.BOOKING_REQUEST,
    payload
  }),

  /**
   * Request booking success
   *
   * @param      {Object}  [payload={}]
   */
  bookingRequestSuccess: (payload = {}) => ({
    type: actions.BOOKING_REQUEST_SUCCESS,
    payload
  }),

  /**
   * Request booking error
   *
   * @param      {string}  [error=""]
   */
  bookingRequestFailure: (payload = "") => ({
    type: actions.BOOKING_REQUEST_FAILURE,
    payload
  }),

  /**
   * Request user booking
   *
   * @param      {Object}  [payload={}]
   */
  myBooking: () => ({
    type: actions.MY_BOOKING
  }),

  /**
   * Request user booking success
   *
   * @param      {Object}  [payload={}]
   */
  myBookingSuccess: (payload = []) => ({
    type: actions.MY_BOOKING_SUCCESS,
    payload
  }),

  /**
   * Request user booking error
   *
   * @param      {string}  [error=""]
   */
  myBookingFailure: (payload = "") => ({
    type: actions.MY_BOOKING_FAILURE,
    payload
  }),

  /**
   * Request user booking
   *
   * @param      {Object}  [payload={}]
   */
  todayBooking: () => ({
    type: actions.TODAY_BOOKING
  }),

  /**
   * Request user booking success
   *
   * @param      {Object}  [payload={}]
   */
  todayBookingSuccess: (payload = []) => ({
    type: actions.TODAY_BOOKING_SUCCESS,
    payload
  }),

  /**
   * Request user booking error
   *
   * @param      {string}  [error=""]
   */
  todayBookingFailure: (payload = "") => ({
    type: actions.TODAY_BOOKING_FAILURE,
    payload
  }),

  /**
   * Cancel user booking
   *
   * @param      {Object}  [payload={}]
   */
  cancelBooking: (payload = null) => ({
    type: actions.CANCEL_BOOKING,
    payload
  }),

  /**
   * Cancel user booking success
   *
   * @param      {Object}  [payload={}]
   */
  cancelBookingSuccess: (payload = []) => ({
    type: actions.CANCEL_BOOKING_SUCCESS,
    payload
  }),

  /**
   * Cancel user booking error
   *
   * @param      {string}  [error=""]
   */
  cancelBookingFailure: (payload = "") => ({
    type: actions.CANCEL_BOOKING_FAILURE,
    payload
  }),

  /**
   * Cancel user booking
   *
   * @param      {Object}  [payload={}]
   */
  cancelLibrarian: (payload = null) => ({
    type: actions.CANCEL_LIBRARIAN,
    payload
  }),

  /**
   * Cancel user booking by librarian success
   *
   * @param      {Object}  [payload={}]
   */
  cancelLibrarianSuccess: (payload = []) => ({
    type: actions.CANCEL_LIBRARIAN_SUCCESS,
    payload
  }),

  /**
   * Cancel user booking  by librarianerror
   *
   * @param      {string}  [error=""]
   */
  cancelLibrarianFailure: (payload = "") => ({
    type: actions.CANCEL_LIBRARIAN_FAILURE,
    payload
  }),

  /**
   * Occupy user booking
   *
   * @param      {Object}  [payload={}]
   */
  occupied: (payload = null) => ({
    type: actions.OCCUPIED,
    payload
  }),

  /**
   * Occupy user booking success
   *
   * @param      {Object}  [payload={}]
   */
  occupiedSuccess: () => ({
    type: actions.OCCUPIED_SUCCESS
  }),

  /**
   * Occupy user booking error
   *
   * @param      {string}  [error=""]
   */
  occupiedFailure: (payload = "") => ({
    type: actions.OCCUPIED_FAILURE,
    payload
  })
};
export default actions;
