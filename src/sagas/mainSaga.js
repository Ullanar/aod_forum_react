import usersDAL from "../DAL/users";
import {GET_USERS, setIsLoadingUsersAC, setUsersAC} from "../redux/mainReducer";
import axios from "axios";
import {call, put, takeEvery} from "redux-saga/effects";


function getUsersData (){
    return usersDAL.getUsers
}

function* usersWorker() {
    yield put(setIsLoadingUsersAC(true))
    const response = yield call(getUsersData)
    yield console.log(response)
    yield put(setUsersAC(response.data))
    yield put(setIsLoadingUsersAC(false))
}

export function* usersWatcher() {
    yield takeEvery(GET_USERS, usersWorker)
}
