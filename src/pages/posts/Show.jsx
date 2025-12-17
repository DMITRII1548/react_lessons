import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { usePostStore } from "../../store/postStore"

function Show() {
    const {id} = useParams()

    const {getPost, post} = usePostStore()

    useEffect(() => {
        getPost(id)
    }, [])

    return (
        <div>
            <h1>{post.title}</h1>
            <p>
                {post.content}
            </p>
        </div>
    )
}

export default Show