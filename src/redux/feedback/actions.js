const actions = {
  FEEDBACK_REQUEST: "FEEDBACK_REQUEST",
  FEEDBACK_SUCCESS: "FEEDBACK_SUCCESS",
  FEEDBACK_ERROR: "FEEDBACK_ERROR",

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
  })
};
export default actions;
