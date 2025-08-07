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
        <div className="flex mt-24 sm:mt-15">
          <div className="fixed w-1/4">
            <SideBar page={page} setPage={setPage}></SideBar>
          </div>
          <div className="ml-[25%] w-3/4">
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