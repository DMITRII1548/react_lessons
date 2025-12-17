import axios from "axios";
import { create } from "zustand";

export const usePostStore = create((set, get) => ({
    posts: [],
    post: {
        id: null,
        title: '',
        content: ''
    },
    errors: {
        title: '',
        content: ''
    },

    setPosts: (newPosts) => set({ posts: newPosts }),
    setPost: (newPost) => set({post: newPost}),
    setErrors: (newErrors) => set({errors: newErrors}),

    getPosts: async () => {
        const res = await axios.get('http://localhost:3000/posts')
        get().setPosts(res.data)
    },
    getPost: async (id) => {
        const res = await axios.get(`http://localhost:3000/posts/${id}`)

        get().setPost(res.data)
    },
    storePost: async (e) => {
        e.preventDefault()
        
        if (get().validatePost()) return

        await axios.post('http://localhost:3000/posts', get().post)
        
        get().setPost({
            title: '',
            content: ''
        })
    },
    updatePost: async (id) => {
        if (get().validatePost()) return

        await axios.patch(`http://localhost:3000/posts/${id}`, get().post)
    },
    deletePost: async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${id}`)

            get().setPosts(get().posts.filter(p => p.id !== id))
        } catch (e) {
            console.log(e)
        }
    },

    
    handlePost: (e) => {
        const name = e.target.name
        const value = e.target.value

        get().setPost({...get().post, [name]: value})
    },
    validatePost: () => {
        const newErrors = {
            title: '',
            content: ''
        }

        if (get().post.title === '') {
            newErrors.title = 'The title field is required'
        }

        if (get().post.content === '') {
            newErrors.content = 'The content field is required'
        }

        get().setErrors(newErrors)

        return newErrors.title || newErrors.content
    }
}))
