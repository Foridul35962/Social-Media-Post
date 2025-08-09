import Header from "./components/header"
import SideBar from "./components/sideBar"
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <PostListProvider>
        <Header></Header>
        <div className="flex mt-24 xs:mt-15">
          <div className="fixed w-1/4">
            {/* <SideBar page={page} setPage={setPage}></SideBar> */}
            <SideBar></SideBar>
          </div>
          <div className="ml-[25%] w-3/4">
            {
              // page === 'home' ? <HomePage APIVariable={APIVariable} setAPIVariable={setAPIVariable}></HomePage> : <CreatePost></CreatePost>
              <Outlet />
            }
          </div>
        </div>
      </PostListProvider>
    </div>
  )
}

export default App