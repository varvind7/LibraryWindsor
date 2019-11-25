import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import registerSaga from "./register/saga";
import roomBookingSaga from "./roomBooking/saga";
export default function* rootSaga(getState) {
	yield all([authSaga(), registerSaga(), roomBookingSaga()]);
}
