const actions = {
  NEW_FEEDBACK_LISTING: "NEW_FEEDBACK_LISTING",
  NEW_FEEDBACK_SUCCESS: "NEW_FEEDBACK_SUCCESS",
  NEW_FEEDBACK_FAILURE: "NEW_FEEDBACK_FAILURE",

  FEEDBACK_DETAILS: "FEEDBACK_DETAILS",
  FEEDBACK_DETAILS_SUCCESS: "FEEDBACK_DETAILS_SUCCESS",
  FEEDBACK_DETAILS_FAILURE: "FEEDBACK_DETAILS_FAILURE",

  /**
   * Get room details
   *
   * @param      {String}  [payload=null]
   */
  feedbackDetails: (payload = "") => ({
    type: actions.FEEDBACK_DETAILS,
    payload
  }),

  /**
   * Room details success
   *
   * @param      {Object}  [payload={}]
   */
  feedbackDetailsSuccess: (payload = {}) => ({
    type: actions.FEEDBACK_DETAILS_SUCCESS,
    payload
  }),

  /**
   * Room details error
   *
   * @param      {string}  [error=""]
   */
  feedbackDetailsFailure: (payload = "") => ({
    type: actions.FEEDBACK_DETAILS_FAILURE,
    payload
  }),

  /**
   * Call to validate passed token
   *
   * @param      {string}  payload
   */
  newFeedback: () => ({
    type: actions.NEW_FEEDBACK_LISTING
  }),

  /**
   * Passed token is valid
   *
   * @param      {Object}  payload
   */
  newFeedbackSuccess: (payload = {}) => ({
    type: actions.NEW_FEEDBACK_SUCCESS,
    payload
  }),

  /**
   * Invalid or expired token
   *
   * @param      {string}  payload
   */
  newFeedbackFailure: (payload = "") => ({
    type: actions.NEW_FEEDBACK_FAILURE,
    payload
  })
};
export default actions;
