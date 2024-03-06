import conn from "./conn.js"

export async function getAllPosts() {
    const [rows] = await conn.query("SELECT * FROM blog_posts;")
    return rows
}

export async function createPost(title, picture, text, reasons) {
    const [result] = await conn.query("INSERT INTO blog_posts (title, picture, content, reasons) VALUES (?, ?, ?, ?);",
     [title, picture, text, reasons])
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

export async function putPost(id, title, content) {
    const [result] = await conn.query("UPDATE blog_posts SET content = (?), title = (?) WHERE id = (?);",
     [content, title, id])
    return result
}