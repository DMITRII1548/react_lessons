import axios from "axios"
import { useState } from "react"

function Create() {
    const [post, setPost] = useState({
        title: '',
        content: ''
    })

    const [errors, setErrors] = useState({
        title: '',
        content: ''
    })

    const validatePost = () => {
        const newErrors = {
            title: '',
            content: ''
        }

        if (post.title === '') {
            newErrors.title = 'The title field is required'
        }

        if (post.content === '') {
            newErrors.content = 'The content field is required'
        }

        setErrors(newErrors)

        return newErrors.title || newErrors.content
    }

    const storePost = async (e) => {
        e.preventDefault()

        setErrors({
            title: '',
            content: ''
        })
        
        if (validatePost()) return

        const res = await axios.post('http://localhost:3000/posts', post)
        
        setPost({
            title: '',
            content: ''
        })
    }

    const handlePost = (e) => {
        const name = e.target.name
        const value = e.target.value

        setPost({...post, [name]: value})
    }

    return (
        <div>
            <div className="mb-4">
                <input 
                    onChange={(e) => handlePost(e)}
                    value={post.title}
                    name="title"
                    type="text" 
                    placeholder="Title" 
                    className="border border-gray-200 p-4 w-full rounded" 
                />
                {errors.title && 
                    <p className="mt-2 text-red-600">{errors.title}</p>
                }
            </div> 
            <div className="mb-4">
                <textarea 
                    onChange={(e) => handlePost(e)}
                    value={post.content}
                    name="content"
                    placeholder="Content" 
                    className="border border-gray-200 p-4 w-full rounded" 
                />
                {errors.content && 
                    <p className="mt-2 text-red-600">{errors.content}</p>
                }
            </div> 
            <div className="mb-4">
                <button 
                    onClick={(e) => storePost(e)}
                    className="inline-block py-2 px-3 bg-sky-500 border border-sky-600 text-white rounded-xl cursor-pointer"
                >
                    Store
                </button>
            </div>
        </div>
    )
}

export default Create