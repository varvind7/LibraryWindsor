import { all, takeEvery, put } from "redux-saga/effects";
// import { push } from "connected-react-router";
import actions from "./actions";
import { history } from "../store";
import { axiosPost, axiosGet } from '../axiosHelper';

/**
 * Request to login.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* registerRequest({ payload }) {
  try {
    // for demo purpose

    // yield new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res(true);
    //   }, 2000);
    // });
    let request = yield axiosPost(payload, 'registration');
    yield put(actions.registerSuccess(payload));
  } catch (error) {
    yield put(actions.registerFailure(error.message, error.data || {}));
  }
}

export function* checkToken({ payload }) {
  try {
    // for demo purpose
    yield new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 2000);
    });
    if (payload === "ramyaDummyToken") {
      const response = {
        reference_id: "B0412013",
        last_day: "2020/02/01",
        email: "ramyaiyer96@gmail.com",
        user_type: 1
      };
      yield put(actions.checkTokenSuccess(response));
    } else {
      throw new Error(
        "Invalid token provided. or your token session is expired."
      );
    }
  } catch (error) {
    yield put(
      actions.checkTokenFailure(
        error.message || "Oops! Something went wrong, Please try again."
      )
    );
    history.push({
      pathname: "/invalid",
      state: { message: error.message }
    });
  }
}
/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([
    takeEvery(actions.REGISTER_REQUEST, registerRequest),
    takeEvery(actions.CHECK_TOKEN, checkToken)
  ]);
}
