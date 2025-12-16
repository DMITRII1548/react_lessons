import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Show() {
    const {id} = useParams()

    const [post, setPost] = useState({})

    const getPost = async () => {
        const res = await axios.get(`http://localhost:3000/posts/${id}`)

        setPost(res.data)
    }

    useEffect(() => {
        getPost()
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