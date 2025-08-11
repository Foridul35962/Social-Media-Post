import { useContext } from "react"
import { postList } from "../store/post-list-store";

const createPost = () => {

    const { addPost } = useContext(postList);

    const handleSubmit = (data) => {
        data.preventDefault();
        const formData = new FormData(data.target);
        const postData = Object.fromEntries(formData);
        addPost(
            postData.userId,
            postData.title,
            postData.content,
            postData.react,
            postData.tags.split(" ")
        );
        data.target.reset();
    }

    return (
        <div className="h-svh p-2 sm:p-10">
            <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label htmlFor="userId" className="font-bold text-lg">Enter your User Id here</label>
                    <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="userId" name="userId" placeholder="Your User Id" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-bold text-lg">Post Title</label>
                    <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="title" name="title" placeholder="How are you feeling today..." />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="content" className="font-bold text-lg">Post Content</label>
                    <textarea rows={3} className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="content" name="content" placeholder="Tell us more about it" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="react" className="font-bold text-lg">Post React</label>
                    <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="react" name="react" placeholder="How many react has on your post" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="tag" className="font-bold text-lg">Post Tag</label>
                    <input className="border-2 text-lg px-3 py-2 border-gray-600 rounded-2xl" type="text" id="tag" name="tags" placeholder="Enter all tags here" />
                </div>
                <button className="p-3 bg-blue-600 w-30 rounded-2xl cursor-pointer text-xl text-white" type="submit">Post</button>
            </form>
        </div>
    )
}

export default createPost