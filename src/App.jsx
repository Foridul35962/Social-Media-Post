import { useState } from "react";
import Header from "./components/header"
import SideBar from "./components/sideBar"
import HomePage from "./components/homePage";
import CreatePost from "./components/createPost";
import PostListProvider from "./store/post-list-store";

const App = () => {
  const [page, setPage] = useState("home");
  return (
    <div>
      <PostListProvider>
        <Header></Header>
        <div className="flex">
          <div className="w-1/4">
            <SideBar page={page} setPage={setPage}></SideBar>
          </div>
          <div className="w-3/4">
            {
              page === 'home' ? <HomePage></HomePage> : <CreatePost></CreatePost>
            }
          </div>
        </div>
      </PostListProvider>
    </div>
  )
}

export default App