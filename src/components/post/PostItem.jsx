import PostDelete from "./PostDelete"

function PostItem({post, editPost}) {
    return (
        <div className="border border-gray-200 rounded-2xl p-4">
            <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
            <p>
                {post.content}
            </p>
            <div className="mt-3 flex gap-3">
                <span 
                    onClick={() => editPost()}
                    className="inline-block text-xs text-white bg-sky-500 border border-sky-600 px-2 py-1 rounded cursor-pointer"
                    >
                Edit</span>
                <PostDelete 
                    post={post} 
                />
            </div>
        </div>
    )
}

export default PostItem