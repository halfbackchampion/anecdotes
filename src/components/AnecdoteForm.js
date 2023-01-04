import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdoteService";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""

    const anecdote = await anecdoteService.addAnecdote(content)

    console.log(anecdote)

    dispatch(createAnecdote(anecdote))
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit = {addAnecdote}>
        <div><input name = "anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm