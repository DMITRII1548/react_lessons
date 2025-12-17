import axios from "axios"
import { useEffect, useState } from "react"
import { generatePath, Link } from "react-router-dom"
import {ROUTES} from './../../routes/routes'

function Index() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await axios.get('http://localhost:3000/posts')
        setPosts(res.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    
    const deletePost = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/posts/${id}`)

            setPosts(posts.filter(p => p.id !== id))
        } catch (e) {
            console.log(e)
        }
    }

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
                            <Link to={generatePath(ROUTES.POST_SHOW, {id: post.id})} className="text-sky-500">View...</Link>
                        </div>
                        <div>
                            <Link to={generatePath(ROUTES.POST_EDIT, {id: post.id})} className="text-sky-500">Edit</Link>
                        </div>
                        <div>
                            <button
                                onClick={() => deletePost(post.id)}
                                className="text-red-600 cursor-pointer"
                            >Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Index