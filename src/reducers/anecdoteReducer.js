import {createSlice} from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload
      return state.map(a => a.id === id ? {...a, votes: a.votes + 1} : a)
    },
    createAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const {addVote, createAnecdote, appendAnecdote, setAnecdote} = anecdoteSlice.actions

export default anecdoteSlice.reducer