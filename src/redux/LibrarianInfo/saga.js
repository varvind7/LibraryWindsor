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
export function* librarianRoomBooking({ payload }) {
  try {
    let { data } = yield axiosGet("librarian/room/getRoomList");
    yield put(actions.librarianRoomBookingSuccess(data.data));
  } catch (error) {
    yield put(actions.librarianRoomBookingFailure(error.message, error.data || {}));
  }
}

/**
 * Request to login.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* librarianRoomDetails({ payload }) {
  try {
    let { data } = yield axiosGet(`librarian/room/roomDetails/${payload}`);
    let response = data.data;
    response.booking = response.booking.map((each, index) => {
      each.key = index;
      return each;
    });
    yield put(actions.librarianRoomDetailsSuccess(response));
  } catch (error) {
    yield put(actions.librarianRoomDetailsFailure(error.message, error.data || {}));
  }
}

/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([takeEvery(actions.LIBRARIAN_ROOM_BOOKING_LISTING, librarianRoomBooking)]);
  yield all([takeEvery(actions.LIBRARIAN_ROOM_DETAILS, librarianRoomDetails)]);
}
