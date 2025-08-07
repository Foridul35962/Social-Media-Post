import { createContext, useReducer } from "react";
import DefaultPost from "./default-posts";

export const postList = createContext({
    posts: [],
    addPost: ()=>{},
    deletePost: ()=>{}
});

const postReducer = (currPost,action) =>{
    let newPost = currPost;
    if(action.type==='add'){
        newPost = [{userId:action.payload.userId,
            title:action.payload.title,
            content:action.payload.content,
            react:action.payload.react,
            tags:action.payload.tags}, ...currPost]

    }
    else if(action.type==='delete'){
        newPost= currPost.filter((post)=>
            post.userId !== action.payload.userId
        )
    }
    return newPost;
}

const postListProvider = ({children}) =>{
    
    const [posts, dispatch] = useReducer(postReducer,DefaultPost);

    const addPost=(userId,title,content,react,tags)=>{
        const addItem ={
            type:"add",
            payload:{
                userId,
                title,
                content,
                react,
                tags
            }
        }
        dispatch(addItem);
    };

    const deletePost = (userId)=>{
        const deleteItem= {
            type: "delete",
            payload: {userId}
        }
        dispatch(deleteItem);
    };

    return (
        <postList.Provider value={{posts,addPost,deletePost}}>
            {children}
        </postList.Provider>
    )
}

export default postListProvider;