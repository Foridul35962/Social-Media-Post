import { useRef } from "react"

const createPost = () => {
    const userId=useRef();
    const title=useRef();
    const content=useRef();
    const react=useRef();
    const tags=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
    }

  return (
    <div className="h-svh p-2 sm:p-10">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="userId" className="font-bold text-lg">Enter your User Id here</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="userId" placeholder="Your User Id" ref={userId} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="title" className="font-bold text-lg">Post Title</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="title" placeholder="How are you feeling today..." ref={title} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Content" className="font-bold text-lg">Post Content</label>
                <textarea rows={3} className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="Content" placeholder="Tell us more about it" ref={content} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="react" className="font-bold text-lg">Post React</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="react" placeholder="How many react has on your post" ref={react} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="tag" className="font-bold text-lg">Post Tag</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="tag" placeholder="Enter all tags here" ref={tags} />
            </div>
            <button className="p-3 bg-blue-600 w-30 rounded-2xl cursor-pointer text-xl text-white" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default createPost