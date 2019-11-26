import { all, takeEvery, put } from "redux-saga/effects";
// import { push } from "connected-react-router";
import actions from "./actions";
import { history } from "../store";
import { axiosPost, axiosGet } from "../axiosHelper";

/**
 * getting all feedbacks
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* feedbackDetails({ payload }) {
  try {
    let { data } = yield axiosGet("feedback/getFeedbacks");
    yield put(actions.feedbackDetailsSuccess(data.data));
  } catch (error) {
    yield put(actions.feedbackDetailsFailure(error.message, error.data || {}));
  }
}

/**
 * Post new feedback
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* newFeedback({ payload }) {
  try {
    let { data } = yield axiosPost(`feedback/newFeedback/${payload}`);
    let response = data.data;
    response.booking = response.booking.map((each, index) => {
      each.key = index;
      return each;
    });
    yield put(actions.newFeedbackSuccess(response));
  } catch (error) {
    yield put(actions.newFeedbackFailure(error.message, error.data || {}));
  }
}

/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([takeEvery(actions.FEEDBACK_LISTING, feedbackDetails)]);
  yield all([takeEvery(actions.NEW_FEEDBACK_LISTING, newFeedback)]);
}
