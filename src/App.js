import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAnecdote } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdoteService'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdote(anecdotes)))
  }, [dispatch])


  return (
    <div>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App