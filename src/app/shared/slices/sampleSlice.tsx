import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {},
  };

  const sampleSlice = createSlice({
      name:"sample",
      initialState,
      reducers: {
          getSample: () => {

          },
          getSampleSuccess: (state, action) => {
              const data = action.payload;
              return {
                ...state,
                user: data
              }  
          }
      }
  })

  export default sampleSlice