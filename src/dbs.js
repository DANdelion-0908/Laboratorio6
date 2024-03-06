import conn from "./conn.js"

export async function getAllPosts() {
    const [rows] = await conn.query("SELECT * FROM blog_posts;")
    return rows
}

export async function createPost(title, picture, content, reasons) {
    const [result] = await conn.query("INSERT INTO blog_posts (title, picture, vision, favorites) VALUES (?, ?, ?, ?);",
     [title, picture, content, reasons])
    return result
}

export async function deletePost(id) {
    await conn.query("DELETE FROM blog_posts WHERE id = (?);", [id])
}

export async function getPost(id) {
    const[result] = await conn.query("SELECT * FROM blog_posts WHERE id = (?)",
     [id])
    return result
}

export async function putPost(id, title, content, picture) {
    const [result] = await conn.query("UPDATE blog_posts SET vision = (?), title = (?), picture = (?) WHERE id = (?);",
     [content, title, picture, id])
    return result
}