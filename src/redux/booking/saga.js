import { all, takeEvery, put } from "redux-saga/effects";
// import { push } from "connected-react-router";
import actions from "./actions";
import roomActions from "../roomBooking/actions";
import { history } from "../store";
import { axiosPost, axiosGet } from "../axiosHelper";
import moment from "moment";
/**
 * Request for new booking.
 *
 * @param      {Object}   arg1
 * @param      {Object}   arg1.payload
 */
export function* bookingRequest({ payload }) {
  try {
    let request = payload;
    request.booked_from = moment(request.booked_from).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    request.booked_to = moment(request.booked_to).format("YYYY-MM-DD HH:mm:ss");
    let { data } = yield axiosPost(request, "booking/requestBooking");
    yield put(actions.bookingRequestSuccess(data.data));
    yield put(roomActions.roomDetails(request.room_id));
  } catch (error) {
    yield put(actions.bookingRequestFailure(error.message, error.data || {}));
  }
}

/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([takeEvery(actions.BOOKING_REQUEST, bookingRequest)]);
}
