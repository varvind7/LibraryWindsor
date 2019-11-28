import { all, takeEvery, put } from "redux-saga/effects";
// import { push } from "connected-react-router";
import actions from "./actions";
import { history } from "../store";
import { axiosPost, axiosGet } from "../axiosHelper";

/**
 * Request to login.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* roomBooking({ payload }) {
  try {
    let { data } = yield axiosGet("room/getRoomList");
    yield put(actions.roomBookingSuccess(data.data));
  } catch (error) {
    yield put(actions.roomBookingFailure(error.message, error.data || {}));
  }
}

/**
 * Request to login.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* roomDetails({ payload }) {
  try {
    let { data } = yield axiosGet(`room/roomDetails/${payload}`);
    let response = data.data;
    response.booking = response.booking.map((each, index) => {
      each.key = index;
      return each;
    });

    response.feedback = response.feedback.map((each, index) => {
      each.key = index;
      return each;
    });
    yield put(actions.roomDetailsSuccess(response));
  } catch (error) {
    yield put(actions.roomDetailsFailure(error.message, error.data || {}));
  }
}

/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([takeEvery(actions.ROOM_BOOKING_LISTING, roomBooking)]);
  yield all([takeEvery(actions.ROOM_DETAILS, roomDetails)]);
}
