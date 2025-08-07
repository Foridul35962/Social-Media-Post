import { useContext, useRef } from "react"
import { postList } from "../store/post-list-store";

const createPost = () => {

    const {addPost} = useContext(postList);

    const userIdElement=useRef();
    const titleElement=useRef();
    const contentElement=useRef();
    const reactElement=useRef();
    const tagsElement=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userId = userIdElement.current.value;
        const title = titleElement.current.value;
        const content = contentElement.current.value;
        const react = reactElement.current.value;
        const tags = tagsElement.current.value.split(" ");
        
        addPost(userId,title,content,react,tags);

        userIdElement.current.value = "";
        titleElement.current.value = "";
        contentElement.current.value = "";
        reactElement.current.value = "";
        tagsElement.current.value = "";

    }

  return (
    <div className="h-svh p-2 sm:p-10">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="userId" className="font-bold text-lg">Enter your User Id here</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="userId" placeholder="Your User Id" ref={userIdElement} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="title" className="font-bold text-lg">Post Title</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="title" placeholder="How are you feeling today..." ref={titleElement} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Content" className="font-bold text-lg">Post Content</label>
                <textarea rows={3} className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="Content" placeholder="Tell us more about it" ref={contentElement} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="react" className="font-bold text-lg">Post React</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="react" placeholder="How many react has on your post" ref={reactElement} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="tag" className="font-bold text-lg">Post Tag</label>
                <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="tag" placeholder="Enter all tags here" ref={tagsElement} />
            </div>
            <button className="p-3 bg-blue-600 w-30 rounded-2xl cursor-pointer text-xl text-white" type="submit">Post</button>
        </form>
    </div>
  )
}

export default createPost