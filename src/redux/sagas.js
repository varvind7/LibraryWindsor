import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import registerSaga from "./register/saga";
export default function* rootSaga(getState) {
	yield all([authSaga(), registerSaga()]);
}
