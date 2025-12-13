import PostContext from "../../context/PostContext"
import { useContext } from "react"

function PostDelete({post}) {
    const { deletePost } = useContext(PostContext)
    return (
        <>
            <span 
                onClick={() => deletePost(post)}
                className="inline-block text-xs text-white bg-red-500 border border-red-600 px-2 py-1 rounded cursor-pointer"
                >
            Delete</span>
        </>
    )
}

export default PostDelete