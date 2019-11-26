const actions = {
  LIBRARIAN_ROOM_BOOKING_LISTING: "LIBRARIAN_ROOM_BOOKING_LISTING",
  LIBRARIAN_ROOM_BOOKING_SUCCESS: "LIBRARIAN_ROOM_BOOKING_SUCCESS",
  LIBRARIAN_ROOM_BOOKING_FAILURE: "LIBRARIAN_ROOM_BOOKING_FAILURE",

  LIBRARIAN_ROOM_DETAILS: "LIBRARIAN_ROOM_DETAILS",
  LIBRARIAN_ROOM_DETAILS_SUCCESS: "LIBRARIAN_ROOM_DETAILS_SUCCESS",
  LIBRARIAN_ROOM_DETAILS_FAILURE: "LIBRARIAN_ROOM_DETAILS_FAILURE",

  /**
   * Get room details
   *
   * @param      {String}  [payload=null]
   */
  librarianRoomDetails: (payload = "") => ({
    type: actions.LIBRARIAN_ROOM_DETAILS,
    payload
  }),

  /**
   * Room details success
   *
   * @param      {Object}  [payload={}]
   */
  librarianRoomDetailsSuccess: (payload = {}) => ({
    type: actions.LIBRARIAN_ROOM_DETAILS_SUCCESS,
    payload
  }),

  /**
   * Room details error
   *
   * @param      {string}  [error=""]
   */
  librarianRoomDetailsFailure: (payload = "") => ({
    type: actions.LIBRARIAN_ROOM_DETAILS_FAILURE,
    payload
  }),

  /**
   * Call to validate passed token
   *
   * @param      {string}  payload
   */
  librarianRoomBooking: () => ({
    type: actions.LIBRARIAN_ROOM_BOOKING_LISTING
  }),

  /**
   * Passed token is valid
   *
   * @param      {Object}  payload
   */
  librarianRoomBookingSuccess: (payload = {}) => ({
    type: actions.LIBRARIAN_ROOM_BOOKING_SUCCESS,
    payload
  }),

  /**
   * Invalid or expired token
   *
   * @param      {string}  payload
   */
  librarianRoomBookingFailure: (payload = "") => ({
    type: actions.LIBRARIAN_ROOM_BOOKING_FAILURE,
    payload
  })
};
export default actions;
