import { createContext, useReducer, useState } from "react";
import DefaultPost from "./default-posts";

export const postList = createContext({
    posts: [],
    addPost: () => { },
    deletePost: () => { },
    addApiPost: () => { },
    apiLoaded: false,
    setApiLoaded: () => { }
});

const postReducer = (currPost, action) => {
    let newPost = currPost;
    if (action.type === 'add') {
        newPost = [{
            userId: action.payload.userId,
            title: action.payload.title,
            content: action.payload.content,
            react: action.payload.react,
            tags: action.payload.tags
        }, ...currPost
        ];
    }
    else if (action.type === 'addApi') {
        newPost = [...action.payload.map((post, idx) => ({
            userId: idx,
            title: post.title,
            content: post.body,
            react: post.reactions.likes,
            tags: post.tags
        })), ...currPost];
    }
    else if (action.type === 'delete') {
        newPost = currPost.filter((post) =>
            post.userId !== action.payload.userId
        )
    }
    return newPost;
}

const postListProvider = ({ children }) => {

    const [posts, dispatch] = useReducer(postReducer, DefaultPost);
    const [apiLoaded, setApiLoaded] = useState(false);


    const addPost = (userId, title, content, react, tags) => {
        const addItem = {
            type: "add",
            payload: {
                userId,
                title,
                content,
                react,
                tags
            }
        }
        dispatch(addItem);
    };

    const addApiPost = (postArray) => {
        const addApiItem = {
            type: "addApi",
            payload: postArray
        };
        dispatch(addApiItem);
    };

    const deletePost = (userId) => {
        const deleteItem = {
            type: "delete",
            payload: { userId }
        }
        dispatch(deleteItem);
    };

    return (
        <postList.Provider value={{ posts, addPost, deletePost, addApiPost,apiLoaded,setApiLoaded }}>
            {children}
        </postList.Provider>
    )
}

export default postListProvider;