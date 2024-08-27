import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import logger from "redux-logger";

// configer redux persisit
// const persistConfig = {
//   key: "auth",
//   storage,
// };

// const myAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {},
  middleware: (getDefaulteMiddleWare) => getDefaulteMiddleWare().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
