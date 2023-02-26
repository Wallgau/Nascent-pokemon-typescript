import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import userContactDataReducer from '../reducers/userContactData';
import pokemonsReducer from '../reducers/pokemons';

const store = configureStore({
  reducer: {
    userContactDataReducer,
    pokemonsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(thunk),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;