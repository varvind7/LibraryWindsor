import { all, takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getToken, clearToken } from "../../helpers/utility";
import actions from "./actions";
import { axiosPost, axiosGet } from "../axiosHelper";

/**
 * Request to login.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* feedback({ payload }) {
  try {
    const { data } = yield axiosPost(payload, "room/feedback");
    yield put(actions.feedbackSuccess(data.data));
  } catch (error) {
    yield put(actions.feedbackFailure(error.message, error.data || {}));
  }
}
/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([takeEvery(actions.FEEDBACK_REQUEST, feedback)]);
}
