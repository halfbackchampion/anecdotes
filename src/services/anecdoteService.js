import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (content) => {
  return {
    content: content,
    id: getId(),
    votes: 0
  }
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const addAnecdote = async (content) => {
    const anecdote = asObject(content)
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const updateAnecdote = async (anecdote) => {
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return response.data 
}

export default {
    getAll,
    getAnecdote,
    addAnecdote,
    updateAnecdote
}