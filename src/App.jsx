import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainIndex from './pages/main/Index'
import PostIndex from './pages/posts/Index'
import PostShow from './pages/posts/Show'
import PostCreate from './pages/posts/Create'
import PostEdit from './pages/posts/Edit'
import {ROUTES} from './routes/routes'

function App() {
    return (
        <>
            <Router>
                <div className="mb-2 mx-3 my-2 flex gap-3">
                    <Link to={ROUTES.HOME} className="text-sky-500">Home</Link>
                    <Link to={ROUTES.POST_INDEX} className="text-sky-500">Posts</Link>
                    <Link to={ROUTES.POST_CREATE} className="text-sky-500">Add post</Link>
                </div>
                
                <div className="mb-2 mx-3 my-2">
                    <Routes>
                        <Route path={ROUTES.HOME} element={<MainIndex />}></Route>

                        <Route path={ROUTES.POST_INDEX} element={<PostIndex />}></Route>
                        <Route path={ROUTES.POST_CREATE} element={<PostCreate />}></Route>
                        <Route path={ROUTES.POST_SHOW} element={<PostShow />}></Route>
                        <Route path={ROUTES.POST_EDIT} element={<PostEdit />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App