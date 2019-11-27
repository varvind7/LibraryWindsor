const actions = {
  FEEDBACK_REQUEST: "FEEDBACK_REQUEST",
  FEEDBACK_SUCCESS: "FEEDBACK_SUCCESS",
  FEEDBACK_ERROR: "FEEDBACK_ERROR",

  MY_ROOM_REQUEST: "MY_ROOM_REQUEST",
  MY_ROOM_SUCCESS: "MY_ROOM_SUCCESS",
  MY_ROOM_ERROR: "MY_ROOM_ERROR",

  /**
   * request to login.
   *
   * @param      {Object}  [payload={}]
   */
  feedback: (payload = {}) => ({
    type: actions.FEEDBACK_REQUEST,
    payload
  }),

  /**
   * when feedback is successfull.
   *
   * @param      {Object}  [payload={}]
   * @param      {string}  [token=""]
   */
  feedbackSuccess: (payload = {}) => ({
    type: actions.FEEDBACK_SUCCESS,
    payload
  }),

  /**
   * when something went wrong with feedback.
   *
   * @param      {string}  [payload=""]
   * @param      {Object}  [errors={}]
   */
  feedbackFailure: (payload = "", errors = {}) => ({
    type: actions.FEEDBACK_ERROR,
    payload,
    errors
  }),

  /**
   * request to login.
   *
   * @param      {Object}  [payload={}]
   */
  getRooms: () => ({
    type: actions.MY_ROOM_REQUEST,
  }),

  /**
   * when getRooms is successfull.
   *
   * @param      {Object}  [payload={}]
   * @param      {string}  [token=""]
   */
  getRoomsSuccess: (payload = []) => ({
    type: actions.MY_ROOM_SUCCESS,
    payload
  }),

  /**
   * when something went wrong with getRooms.
   *
   * @param      {string}  [payload=""]
   * @param      {Object}  [errors={}]
   */
  getRoomsFailure: (payload = "") => ({
    type: actions.MY_ROOM_ERROR,
    payload
  })
};
export default actions;
