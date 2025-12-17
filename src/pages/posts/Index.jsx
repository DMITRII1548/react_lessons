import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Index() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await axios.get('http://localhost:3000/posts')
        setPosts(res.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id} className="bg-white p-4 border border-gray-200 w-full mb-4">
                        <strong>{post.title}</strong>
                        <p>
                            {post.content}
                        </p>
                        <div>
                            <Link to={`/posts/${post.id}`} className="text-sky-500">View...</Link>
                        </div>
                        <div>
                            <Link to={`/posts/${post.id}/edit`} className="text-sky-500">Edit</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Index