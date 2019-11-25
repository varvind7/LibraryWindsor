import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getToken, clearToken } from '../../helpers/utility';
import actions from './actions';
 import { axiosPost, axiosGet } from '../axiosHelper';

/**
 * Request to login.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* loginRequest({ payload }) {
  try {
    // for demo purpose

    yield new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 2000);
    });
    if (payload) {
      const token = 'TokenWillBeRetrivedFromServerAfterAuthentication';
      const response = {
        name: 'Ramya Iyer',
      };
      yield localStorage.setItem('auth_token', token);

      yield put(actions.loginSuccess(response, token));
    } else {
      throw new Error('Invalid credentials provided.');
    }
  } catch (error) {
    yield put(actions.loginFailure(error.message, error.data || {}));
  }
}

/**
 * Call to get user details.
 *
 */
export function* getUser() {
  try {
     const { data } = yield axiosGet('/api/login');
    const response = {
      name: 'Ramya Iyer',
    };
    yield put(actions.getUserSuccess(response));
  } catch (error) {
    yield put(actions.getUserFailure(error.message || ''));
  }
}

/**
 * Call to log user out.
 *
 */
export function* logout() {
  try {
    // yield axiosGet('/logout');
    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutError());
  }
}

/**
 * logging out success.
 *
 */
export function* logoutSuccess() {
  clearToken();
  yield put(push('/'));
}

/**
 * check if authenticated user access.
 *
 */
export function* checkAuthorization() {
  const token = getToken().get('authToken');
  if (token) {
    yield put(actions.loginSuccess({}, token));
  }
}
/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHECK_AUTHORIZATION, checkAuthorization),
    takeEvery(actions.LOGIN_REQUEST, loginRequest),
    takeEvery(actions.LOGOUT, logout),
    takeEvery(actions.LOGOUT_SUCCESS, logoutSuccess),
    takeEvery(actions.GET_USER, getUser),
  ]);
}
