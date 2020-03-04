import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'favourites',
  initialState: {
    value: [52776, 52855, 52894],
  },
  reducers: {
    toggleFavourite: (state, action) => {
		//console.log({ state, action, value: +action.payload });
		const index = state.value.indexOf(+action.payload);
    	index === -1 ? state.value.push(+action.payload) : state.value.splice(index, 1);;
	},
  },
});

export const selectFavourites = state => state.favourites.value;
export const { toggleFavourite } = slice.actions;

export default slice.reducer;
