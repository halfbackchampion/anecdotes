import { useSelector, useDispatch } from 'react-redux'
import { addVote, createVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addVote = (event) => {
    event.preventDefault()
    const content = event.target.name.value
    event.target.name = ""
    dispatch(createVote(content))
  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

  return (
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
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App