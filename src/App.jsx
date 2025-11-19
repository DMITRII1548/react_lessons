import { useState } from "react"

function App() {
    const [post, setPost] = useState({
        title: '',
        content: '',
    })

    const [posts, setPosts] = useState([])

    const handlePost = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost({...post, [name]: value})
    }

    const storePost = (e) => {
        e.preventDefault()

        setPosts([...posts, post])

        setPost({
            title: '',
            content: ''
        })
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
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
                    </div>
                    )   
                )}
            </div>
        </div>
    )
}

export default App
