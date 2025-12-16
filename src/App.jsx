import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PostIndex from './pages/posts/Index'
import MainIndex from './pages/main/Index'

function App() {
    return (
        <>
            <Router>
                <div className="mb-2 mx-3 my-2 flex gap-3">
                    <Link to={"/"} className="text-sky-500">Home</Link>
                    <Link to={"/posts"} className="text-sky-500">Posts</Link>
                </div>
                
                <div className="mb-2 mx-3 my-2">
                    <Routes>
                        <Route path={"posts"} element={<PostIndex />}></Route>
                        <Route path={""} element={<MainIndex />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App