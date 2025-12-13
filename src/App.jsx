import { useState } from "react"

function App() {
    const [post, setPost] = useState({
        title: '',
        content: '',
    })

    const [editingPost, setEditingPost] = useState({
        index: null,
        title: '',
        content: '',
    })

    const [posts, setPosts] = useState([])
    const [errors, setErrors] = useState([])
    const [isModal, setIsModal] = useState(false)

    const handlePost = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost({...post, [name]: value})
    }

    const handleEditingPost = (e) => {
        const name = e.target.name
        const value = e.target.value

        setEditingPost({...editingPost, [name]: value})
    }

    const validatePost = () => {
        const newErrors = []
        setErrors(newErrors)

        if (post.title === '') {
            newErrors.push({message: 'The title field is required'})
        }

        if (post.content === '') {
            newErrors.push({message: 'The content field is required'})
        }

        if (newErrors.length > 0) {
            setErrors(newErrors)
        }

        return newErrors
    }

    const storePost = (e) => {
        e.preventDefault()

        if (validatePost().length > 0) {
            return
        }

        setPosts([...posts, post])

        setPost({
            title: '',
            content: ''
        })
    }

    const editPost = (post) => {
        setEditingPost({
            index: posts.indexOf(post),
            title: post.title,
            content: post.content
        })

        setIsModal(true)
    }

    const updatePost = (e) => {        
        e.preventDefault()

        setPosts(
            posts.map((post, index) => {
                if (index === editingPost.index) {
                    return {
                        title: editingPost.title,
                        content: editingPost.content
                    }
                }

                return post
            })
        )
        
        setIsModal(false)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            { isModal && 
                <div 
                    onClick={() => setIsModal(false)}
                    className="modal-shadow"
                >
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-1/2 border border-gray-200 my-4 p-3 mx-auto rounded"
                    >
                        <div>
                            <div className="mb-4">
                                <input
                                    onChange={(e) => handleEditingPost(e)}
                                    value={editingPost.title}
                                    name="title"
                                    className="border border-gray-400 p-2 w-full"
                                    type="text"
                                    placeholder="Title"/>
                            </div>
                            <div className="mb-4">
                                <textarea
                                    onChange={(e) => handleEditingPost(e)}
                                    value={editingPost.content}
                                    name="content"
                                    className="border border-gray-400 p-2 w-full"
                                    type="text"
                                    placeholder="Content">
                                </textarea>
                            </div>

                            <button 
                                onClick={(e) => updatePost(e)}
                                className="inline-block text-xs text-white bg-sky-500 border border-sky-600 px-2 py-1 rounded cursor-pointer"
                            >Update post</button>
                        </div>
                    </div>
                </div>
            }
            <div className="bg-white w-1/2 border border-gray-200 my-4 p-3 mx-auto">
                <div>
                    <div className="mb-4">
                        <input
                            onChange={(e) => handlePost(e)}
                            value={post.title}
                            name="title"
                            className="border border-gray-400 p-2 w-full"
                            type="text"
                            placeholder="Title"/>
                    </div>
                    <div className="mb-4">
                        <textarea
                            onChange={(e) => handlePost(e)}
                            value={post.content}
                            name="content"
                            className="border border-gray-400 p-2 w-full"
                            type="text"
                            placeholder="Content">
                        </textarea>
                    </div>

                    {errors.length > 0 && 
                        <div className="mb-4">
                            {errors.map((error, index) => (
                                <p key={index} className="text-red-500">{error.message}</p>
                            ))}
                        </div>
                    }

                    <button 
                        onClick={(e) => storePost(e)}
                        className="inline-block text-xs text-white bg-sky-500 border border-sky-600 px-2 py-1 rounded cursor-pointer"
                    >Store post</button>
                </div>
            </div>
            <div className="flex flex-col gap-3 bg-white w-1/2 border border-gray-200 my-2 p-3 mx-auto">
                {posts.map((p, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-4">
                        <h2 className="mb-2 text-lg font-bold">{p.title}</h2>
                        <p>
                            {p.content}
                        </p>
                        <div className="mt-3">
                            <span 
                                onClick={() => editPost(p)}
                                className="inline-block text-xs text-white bg-sky-500 border border-sky-600 px-2 py-1 rounded cursor-pointer"
                                >
                            Edit</span>
                        </div>
                    </div>
                    )   
                )}
            </div>
        </div>
    )
}

export default App
