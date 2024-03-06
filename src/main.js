import express from 'express'
import { getAllPosts, createPost, deletePost, getPost, putPost } from './dbs.js'

const app = express()
const port = 3000
app.use(express.json())

app.post('/posts', async (req, res) => {
  const { title, picture, content, reasons } = req.body

  try {
    const post = await createPost(title, picture, content, reasons)
    res.status(201).json(post)
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.json(posts).status(200)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error del servidor.")
  }
})

app.put('/posts/:id', async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body

  try {
    const post = await putPost(id, title, content)
    res.status(201).json(post)
  } catch (error) {
    console.error(error)
    res.json(post).status(500).send("Error del servidor.")
  }
})

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await deletePost(id)
    res.status(204).send("Eliminado con éxito.")
    
  } catch (error) {
    res.status(500).send("Error del servidor.")
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})