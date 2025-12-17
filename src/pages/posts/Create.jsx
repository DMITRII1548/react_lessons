import { useEffect } from "react"
import { usePostStore } from "../../store/postStore"

function Create() {
    const {post, setPost, errors, setErrors, handlePost, storePost} = usePostStore()

    useEffect(() => {
        setPost({
            title: '',
            content: '',
        })
    }, [])

    useEffect(() => {
        setErrors({
            title: '',
            content: '',
        })
    }, [])

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