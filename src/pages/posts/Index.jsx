import { useEffect } from "react"
import { generatePath, Link } from "react-router-dom"
import {ROUTES} from './../../routes/routes'
import { usePostStore } from "../../store/postStore"

function Index() {
    const {getPosts, posts, deletePost} = usePostStore()

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