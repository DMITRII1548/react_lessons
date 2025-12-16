import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainIndex from './pages/main/Index'
import PostIndex from './pages/posts/Index'
import PostShow from './pages/posts/Show'
import PostCreate from './pages/posts/Create'

function App() {
    return (
        <>
            <Router>
                <div className="mb-2 mx-3 my-2 flex gap-3">
                    <Link to={"/"} className="text-sky-500">Home</Link>
                    <Link to={"/posts"} className="text-sky-500">Posts</Link>
                    <Link to={"/posts/create"} className="text-sky-500">Add post</Link>
                </div>
                
                <div className="mb-2 mx-3 my-2">
                    <Routes>
                        <Route path={"/posts"} element={<PostIndex />}></Route>
                        <Route path={"/"} element={<MainIndex />}></Route>
                        <Route path={"/posts/create"} element={<PostCreate />}></Route>
                        <Route path={"/posts/:id"} element={<PostShow />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App