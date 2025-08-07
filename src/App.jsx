import { useState } from "react";
import Header from "./components/header"
import SideBar from "./components/sideBar"

const App = () => {
    const [page, setPage]=useState("home");
  return (
    <div>
      <Header></Header>
      <SideBar page={page} setPage={setPage}></SideBar>
    </div>
  )
}

export default App