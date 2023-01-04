import {createSlice} from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      const anecdote = action.payload
      return state.map(a => a.id === anecdote.id ? anecdote : a)
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const {updateAnecdote, appendAnecdote, setAnecdote} = anecdoteSlice.actions

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addAnecdote(content)
    dispatch(appendAnecdote(anecdote))
  }
}

export const addVote = (id) => {
  return async dispatch => {
    const anecdote = await anecdoteService.getAnecdote(id)
    const updatedAnecdote = await anecdoteService.updateAnecdote({...anecdote, votes: anecdote.votes + 1})
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer