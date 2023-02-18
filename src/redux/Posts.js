import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  posts: [],
  singlePost: {},
  errors: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getAllposts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((Post) => Post.id !== action.payload);
    },
    createPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    updatePost: (state, action) => {
      state.posts = state.posts.filter((Post) => Post.id !== action.payload);
    },
    setError: (state, action) => {
      state.errors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  getAllposts,
  deletePost,
  createPost,
  setError,
  updatePost,
} = postsSlice.actions;

export const getAllPosts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (data) {
      dispatch(getAllposts(data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const createSinglePost = (body) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    if (data) {
      dispatch(createPost(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deltePost = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (data) {
      dispatch(deletePost(id));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
export const updatPost = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (data) {
      dispatch(updatePost(id));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
export default postsSlice.reducer;
