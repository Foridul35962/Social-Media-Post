const sideBar = ({page, setPage}) => {
  return (
    <div className="h-svh bg-gray-800 py-6 px-3 text-center text-xl text-white">
        <div className="flex flex-col w-full gap-3">
            <div className={`${page==='home'&& 'bg-blue-600 w-full rounded-2xl p-1.5'} cursor-pointer`} onClick={()=>setPage("home")}>Home</div>
            <div className={`${!(page==='home') && 'bg-blue-600 w-full rounded-2xl py-1.5'} cursor-pointer`} onClick={()=>setPage("createPost")}>Create Post</div>
        </div>
    </div>
  )
}

export default sideBar