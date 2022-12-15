import { combineReducers } from "@reduxjs/toolkit";
import albumsSlice from "./slices/albumsSlice";

const rootReducer = combineReducers({
  albums: albumsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
