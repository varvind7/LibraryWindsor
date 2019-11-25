const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',

  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',

  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',

  /**
   * checks the authorization.
   */
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),

  /**
   * request to login.
   *
   * @param      {Object}  [payload={}]
   */
  login: (payload = {}) => ({
    type: actions.LOGIN_REQUEST,
    payload,
  }),

  /**
   * when login is successfull.
   *
   * @param      {Object}  [payload={}]
   * @param      {string}  [token=""]
   */
  loginSuccess: (payload = {}, token = '') => ({
    type: actions.LOGIN_SUCCESS,
    payload,
    token,
  }),

  /**
   * when something went wrong with login.
   *
   * @param      {string}  [payload=""]
   * @param      {Object}  [errors={}]
   */
  loginFailure: (payload = '', errors = {}) => ({
    type: actions.LOGIN_ERROR,
    payload,
    errors,
  }),

  /**
   * Call to get logged in user details
   */
  getUser: () => ({
    type: actions.GET_USER,
  }),

  /**
   * Gets the user success.
   *
   * @param      {Object}  [payload={}]
   */
  getUserSuccess: (payload = {}) => ({
    type: actions.GET_USER_SUCCESS,
    payload,
  }),

  /**
   * Gets the user failure.
   *
   * @param      {string}  [payload='']
   */
  getUserFailure: (payload = '') => ({
    type: actions.GET_USER_ERROR,
    payload,
  }),

  /**
   * logs user out
   */
  logout: () => ({
    type: actions.LOGOUT,
  }),

  /**
   * logging out success.
   */
  logoutSuccess: () => ({
    type: actions.LOGOUT_SUCCESS,
  }),

  /**
   * something went wrong while logging out.
   */
  logoutError: () => ({
    type: actions.LOGOUT_ERROR,
  }),
};
export default actions;
