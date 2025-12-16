import axios from "axios"
import { useEffect, useState } from "react"

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
                    </div>
                )
            })}
        </div>
    )
}

export default Index