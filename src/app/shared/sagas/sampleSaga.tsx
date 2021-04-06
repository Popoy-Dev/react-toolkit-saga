import { call, put } from "redux-saga/effects";
import sampleSlice from './../slices/sampleSlice'
import getSampleUser from './../services/sampleServices'


const {getSampleSuccess} = sampleSlice.actions

export function* handleGetSample() {
    try {
        const {data} = yield call(getSampleUser)
        yield put(getSampleSuccess(data))
    }catch (error) {
        console.log(error)
    }
}