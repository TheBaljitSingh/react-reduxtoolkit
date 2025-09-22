import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

//i have to register this reduecers to store
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //this  all are the actions
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    reset(state){
      state.value = 0;
    }
  },
})

export const { increment, decrement,reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer