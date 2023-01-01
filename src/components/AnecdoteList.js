import { useSelector, useDispatch } from "react-redux";
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))

    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(setNotification(`you voted '${anecdote.content}'`))
    // Remove the notification after 5 seconds
    setTimeout(() => dispatch(setNotification("")), 5000)
  }

  const sortedAnecdotes = [...anecdotes]
  sortedAnecdotes.sort((a,b) => b.votes - a.votes)

  return(
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList