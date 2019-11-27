import { all, takeEvery, put } from "redux-saga/effects";
// import { push } from "connected-react-router";
import actions from "./actions";
import roomActions from "../roomBooking/actions";
import { history } from "../store";
import { axiosPost, axiosGet, axiosDelete } from "../axiosHelper";
import moment from "moment";
import _ from "lodash";
/**
 * Request for new booking.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* bookingRequest({ payload }) {
  try {
    let request = _.cloneDeep(payload);
    let response = _.cloneDeep(payload);
    request.booked_from = moment(request.booked_from).format("HH:mm");
    request.booked_to = moment(response.booked_from)
      .add(3, "hours")
      .format("HH:mm");
    let { data } = yield axiosPost(request, "booking/requestBooking");
    yield put(actions.bookingRequestSuccess(data.data));
    yield put(roomActions.roomDetails(request.room_id));
  } catch (error) {
    yield put(actions.bookingRequestFailure(error.message, error.data || {}));
  }
}
/**
 * Get logged user bookings.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* myBooking() {
  try {
    let { data } = yield axiosGet("booking/myBooking");

    let response = data.data.map((each, index) => {
      each.key = index;
      return each;
    });
    yield put(actions.myBookingSuccess(response));
  } catch (error) {
    yield put(actions.myBookingFailure(error.message));
  }
}

/**
 * Get logged user bookings.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* todayBooking() {
  try {
    let { data } = yield axiosGet("booking/todayBookings");

    let response = data.data.map((each, index) => {
      each.key = index + 1;
      return each;
    });
    yield put(actions.todayBookingSuccess(response));
  } catch (error) {
    yield put(actions.todayBookingFailure(error.message));
  }
}
/**
 * Get logged user bookings.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* cancelBooking({ payload }) {
  try {
    yield axiosDelete(payload, `booking/cancelBooking`);
    yield put(actions.cancelBookingSuccess());
    yield put(actions.myBooking());
  } catch (error) {
    yield put(actions.cancelBookingFailure(error.message));
  }
}
/**
 * Get logged user bookings.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* cancelLibrarian({ payload }) {
  try {
    yield axiosDelete(payload, `booking/cancelBooking`);
    yield put(actions.cancelLibrarianSuccess());
    yield put(actions.todayBooking());
  } catch (error) {
    yield put(actions.cancelLibrarianFailure(error.message));
  }
}
/**
 * Get logged user bookings.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* occupied({ payload }) {
  try {
    yield axiosDelete(payload, `booking/occupyBooking`);
    yield put(actions.occupiedSuccess());
    yield put(actions.todayBooking());
  } catch (error) {
    yield put(actions.occupiedFailure(error.message));
  }
}

/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([takeEvery(actions.BOOKING_REQUEST, bookingRequest)]);
  yield all([takeEvery(actions.MY_BOOKING, myBooking)]);
  yield all([takeEvery(actions.CANCEL_BOOKING, cancelBooking)]);
  yield all([takeEvery(actions.CANCEL_LIBRARIAN, cancelLibrarian)]);
  yield all([takeEvery(actions.TODAY_BOOKING, todayBooking)]);
  yield all([takeEvery(actions.OCCUPIED, occupied)]);
}
