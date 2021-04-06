import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import sampleSlice from './../../app/shared/slices/sampleSlice'
export function Counter() {
  const {getSample} = sampleSlice.actions
  const count = useSelector((state : any) => state.sample);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSample())
  }, [])
  // look here
  console.log('count', count)
  return (
    <div>
    </div>
  );
}
