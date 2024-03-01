import express from 'express'
import { getAllPosts, createPost, deletePost, getPost, putPost } from './dbs.js'

const app = express()
const port = 22217
app.use(express.json())

app.post('/posts', async (req, res) => {
  try {
    const post = await createPost("Pokémon", "PMMEC.png", "GOTY", "¿?")
    res.status(201).json(post)
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
  }
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.json(posts).status(200)
  } catch (error) {
    res.status(500).send("Error del servidor.")
  }
})

app.put('/posts', async (req, res) => {
  try {
    const post = await putPost("Pokémon", "Funca")
    res.status(201).json(post)
  } catch (error) {
    res.json(post).status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.delete('/posts', async (req, res) => {
  try {
    const post = await deletePost("Pokémon")
    res.status(204).send("Eliminado con éxito.")
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})