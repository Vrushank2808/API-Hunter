import PostList from "./components/postList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostDetails from "./components/PostDetails"
import {store} from "./store/store"
import { Provider } from "react-redux"
import "./styles.css"  
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostDetails />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
