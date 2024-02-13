import { configureStore } from "@reduxjs/toolkit";

import environmentsReducer from "../app/slices/environmentsSlice";
import clustersReducer from "../app/slices/clustersSlice";
import counterReducer from "../app/slices/counterSlice";

//Importing method
export const store = configureStore({
  reducer: {
    environments: environmentsReducer,
    clusters: clustersReducer,
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
