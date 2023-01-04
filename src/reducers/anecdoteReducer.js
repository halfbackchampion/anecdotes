import {createSlice} from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload
      return state.map(a => a.id === id ? {...a, votes: a.votes + 1} : a)
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const {addVote, appendAnecdote, setAnecdote} = anecdoteSlice.actions

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addAnecdote(content)
    dispatch(appendAnecdote(anecdote))
  }
}

export default anecdoteSlice.reducer