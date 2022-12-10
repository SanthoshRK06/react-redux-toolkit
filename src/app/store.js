import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';


//this is a redux store which has 2 reducers
export const store = configureStore ({
    reducer : {
        posts: postsReducer,
        users: usersReducer
    }
}) 