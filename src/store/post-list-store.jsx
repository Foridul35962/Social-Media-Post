import { createContext, useReducer } from "react";
import DefaultPost from "./default-posts";

export const postList = createContext({
    posts: [],
    addPost: ()=>{},
    deletePost: ()=>{}
});

const postReducer = (currPost,action) =>{}

const postListProvider = ({children}) =>{
    
    const [posts, dispatch] = useReducer(postReducer,DefaultPost);

    const addPost=()=>{};

    const deletePost = ()=>{};

    return (
        <postList.Provider value={{posts,addPost,deletePost}}>
            {children}
        </postList.Provider>
    )
}

export default postListProvider;