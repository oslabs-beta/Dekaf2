import { configureStore } from "@reduxjs/toolkit";

import environmentsReducer from "../app/slices/environmentsSlice";
import brokersReducer from "../app/slices/brokersSlice"; //doing
import clustersReducer from "../app/slices/clustersSlice";
import topicsReducer from "../app/slices/topicsSlice";
import messagesReducer from "../app/slices/messagesSlice"; //doing
import errorsReducer from "../app/slices/errorsSlice"; //doing
import counterReducer from "../app/slices/counterSlice";

//Importing method
export const store = configureStore({
  reducer: {
    environments: environmentsReducer,
    brokers: brokersReducer, //doing
    clusters: clustersReducer,
    topics: topicsReducer,
    messages: messagesReducer, //doing
    errors: errorsReducer, //doing
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
