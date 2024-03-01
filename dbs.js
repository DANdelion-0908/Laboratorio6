import conn from "./conn.js"

export async function getAllPosts() {
    const [rows] = await conn.query("SELECT * FROM blog_posts;")
    return rows
}

export async function createPost(title, image, content, reasons) {
    const [result] = await conn.query("INSERT INTO blog_posts (title, picture, vision, favorites) VALUES (?, ?, ?, ?);",
     [title, image, content, reasons])
    return result
}

export async function deletePost(title) {
    await conn.query("DELETE FROM blog_posts WHERE title = (?);", [title])
}

export async function getPost(title) {
    const[result] = await conn.query("SELECT * FROM blog_posts WHERE title = (?)",
     [title])
    return result
}

export async function putPost(title, content) {
    const [result] = await conn.query("UPDATE blog_posts SET  vision = (?) WHERE title = (?);",
     [content, title])
    return result
}