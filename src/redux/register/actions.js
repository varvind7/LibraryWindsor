const actions = {
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",

  CHECK_TOKEN: "CHECK_TOKEN",
  CHECK_TOKEN_SUCCESS: "CHECK_TOKEN_SUCCESS",
  CHECK_TOKEN_ERROR: "CHECK_TOKEN_ERROR",

  /**
   * Call to validate passed token
   *
   * @param      {string}  payload
   */
  checkToken: (payload = "") => ({
    type: actions.CHECK_TOKEN,
    payload
  }),

  /**
   * Passed token is valid
   *
   * @param      {Object}  payload
   */
  checkTokenSuccess: (payload = {}) => ({
    type: actions.CHECK_TOKEN_SUCCESS,
    payload
  }),

  /**
   * Invalid or expired token
   *
   * @param      {string}  payload
   */
  checkTokenFailure: (payload = "") => ({
    type: actions.CHECK_TOKEN_ERROR,
    payload
  }),

  /**
   * request to register.
   *
   * @param      {Object}  [payload={}]
   */
  register: (payload = {}) => ({
    type: actions.REGISTER_REQUEST,
    payload
  }),

  /**
   * when register is successfull.
   *
   * @param      {Object}  [payload={}]
   * @param      {string}  [token=""]
   */
  registerSuccess: (payload = {}) => ({
    type: actions.REGISTER_SUCCESS,
    payload
  }),

  /**
   * when something went wrong with register.
   *
   * @param      {string}  [payload=""]
   * @param      {Object}  [errors={}]
   */
  registerFailure: (payload = "", errors = {}) => ({
    type: actions.REGISTER_ERROR,
    payload,
    errors
  })
};
export default actions;
