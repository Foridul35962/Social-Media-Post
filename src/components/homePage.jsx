import { useContext } from "react"
import { postList } from "../store/post-list-store"

const homePage = () => {

  const { posts } = useContext(postList);

  return (
    <div className="p-10 w-full flex flex-col gap-5">
      {
        posts.map((post) => (
          <div key={post.userId} className="border-2 border-gray-400 rounded-2xl relative sm:w-3/4">
            <button className="flex absolute -right-2 -top-2 p-1.5 text-white rounded-2xl bg-red-600 cursor-pointer"><i class="fa-solid fa-trash"></i></button>
            <div className="p-3">
              <div className="text-xl font-bold">{post.title}</div>
              <div className="py-2">{post.content}</div>
              <div className="flex gap-3 flex-wrap">
                {post.tags.map((tag) => (
                  <span className="text-white bg-blue-700 py-1 px-1.5 font-semibold rounded-xl">{tag}</span>
                ))}
              </div>
              <div className="mt-4 bg-green-300 p-2 rounded-2xl">
                This Post has been reacted by <span className="font-semibold text-red-700">{post.react}</span> people.
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default homePage