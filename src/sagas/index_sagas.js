import {usersWatcher} from "./mainSaga";
import {all} from "@redux-saga/core/effects";

export function* rootWatcher() {
    yield all([usersWatcher()])
}
