import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import favouritesReducer from "./features/favourites/favouritesSlice";

export default configureStore({
  reducer: {
	counter: counterReducer,
	favourites: favouritesReducer,
  },
});
