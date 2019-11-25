const actions = {
  ROOM_BOOKING_LISTING: "ROOM_BOOKING_LISTING",
  ROOM_BOOKING_SUCCESS: "ROOM_BOOKING_SUCCESS",
  ROOM_BOOKING_FAILURE: "ROOM_BOOKING_FAILURE",

  /**
   * Call to validate passed token
   *
   * @param      {string}  payload
   */
  roomBooking: (payload = "") => ({
    type: actions.ROOM_BOOKING_LISTING,
    payload
  }),

  /**
   * Passed token is valid
   *
   * @param      {Object}  payload
   */
  roomBookingSuccess: (payload = {}) => ({
    type: actions.ROOM_BOOKING_SUCCESS,
    payload
  }),

  /**
   * Invalid or expired token
   *
   * @param      {string}  payload
   */
  roomBookingFailure: (payload = "") => ({
    type: actions.ROOM_BOOKING_FAILURE,
    payload
  }),

  
};
export default actions;
