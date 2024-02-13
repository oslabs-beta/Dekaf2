import { configureStore } from "@reduxjs/toolkit";

import environmentsReducer from "../app/slices/environmentsSlice";
import counterReducer from "../app/slices/counterSlice";

//Importing method
export const store = configureStore({
  reducer: {
    environments: environmentsReducer,
    counter: counterReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
