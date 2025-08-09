import { Link } from "react-router-dom"

const sideBar = () => {
  return (
    <div className="h-svh bg-gray-800 py-6 px-3 text-center text-xl text-white">
      <div className="flex flex-col w-full gap-3">
        <Link to="/" className={'bg-blue-600 w-full rounded-2xl p-1.5'}>
          Home
        </Link>
        <Link to="/create-post" className={'bg-blue-600 w-full rounded-2xl py-1.5'}>
          Create Post
        </Link>
      </div>
    </div>
  )
}

export default sideBar