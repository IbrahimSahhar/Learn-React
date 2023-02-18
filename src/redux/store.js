import { configureStore } from "@reduxjs/toolkit";

// reducers
import PostsReducer from "./Posts";

export default configureStore({
  reducer: {
    posts: PostsReducer,
  },
});
