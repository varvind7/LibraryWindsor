const actions = {
  ROOM_BOOKING_LISTING: "ROOM_BOOKING_LISTING",
  ROOM_BOOKING_SUCCESS: "ROOM_BOOKING_SUCCESS",
  ROOM_BOOKING_FAILURE: "ROOM_BOOKING_FAILURE",

  ROOM_DETAILS: "ROOM_DETAILS",
  ROOM_DETAILS_SUCCESS: "ROOM_DETAILS_SUCCESS",
  ROOM_DETAILS_FAILURE: "ROOM_DETAILS_FAILURE",

  /**
   * Get room details
   *
   * @param      {String}  [payload=null]
   */
  roomDetails: (payload = "") => ({
    type: actions.ROOM_DETAILS,
    payload
  }),

  /**
   * Room details success
   *
   * @param      {Object}  [payload={}]
   */
  roomDetailsSuccess: (payload = {}) => ({
    type: actions.ROOM_DETAILS_SUCCESS,
    payload
  }),

  /**
   * Room details error
   *
   * @param      {string}  [error=""]
   */
  roomDetailsFailure: (payload = "") => ({
    type: actions.ROOM_DETAILS_FAILURE,
    payload
  }),

  /**
   * Call to validate passed token
   *
   * @param      {string}  payload
   */
  roomBooking: () => ({
    type: actions.ROOM_BOOKING_LISTING
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
  })
};
export default actions;
