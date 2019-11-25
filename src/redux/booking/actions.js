const actions = {
  BOOKING_REQUEST: "BOOKING_REQUEST",
  BOOKING_REQUEST_SUCCESS: "BOOKING_REQUEST_SUCCESS",
  BOOKING_REQUEST_FAILURE: "BOOKING_REQUEST_FAILURE",

  MODAL_ACTION: 'MODAL_ACTION',


  modalAction: (payload = false)=>({
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
  })
};
export default actions;
