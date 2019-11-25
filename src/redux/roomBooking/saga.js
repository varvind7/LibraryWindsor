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
export function* roomBooking({ payload }) {
  try {
    // for demo purpose
    

    // yield new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res(true);
    //   }, 2000);
    // });
    let request = yield axiosGet('/api/bookingRoomListing');
    console.log(request);
    yield put(actions.roomBookingSuccess(payload));
  } catch (error) {
    yield put(actions.roomBookingFailure(error.message, error.data || {}));
  }
}


/**
 * root saga which will capture the actions.
 *
 */
export default function* rootSaga() {
  yield all([
    
    takeEvery(actions.ROOM_BOOKING_LISTING, roomBooking),

  ]);
}
