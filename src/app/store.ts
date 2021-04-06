import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sampleReducer from '../app/shared/slices/sampleSlice';
import createSagaMiddleware from "redux-saga";
import watcherSaga from './shared/sagas/watcherSaga'

const reducer = combineReducers({
  counter: counterReducer,
  sample: sampleReducer.reducer,
})
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
