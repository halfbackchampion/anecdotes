import anecdoteReducer from './anecdoteReducer'
import notificationReducer from "./notificationReducer"
import filterReducer from './filterReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  }
})

export default store