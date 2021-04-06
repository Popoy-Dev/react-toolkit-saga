import { takeLatest } from 'redux-saga/effects'
import sampleSlice from './../slices/sampleSlice'
import {handleGetSample} from './sampleSaga'

const {getSample} = sampleSlice.actions

export default function* watcherSaga() {
    yield takeLatest(getSample, handleGetSample)
}