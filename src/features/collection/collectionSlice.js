import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'collection',
  initialState: {
    value: [52772, 52773, 52776],
  },
  reducers: {
    toggleFavourite: (state, action) => {
		//console.log({ state, action, value: +action.payload });
		const index = state.value.indexOf(+action.payload);
    	index === -1 ? state.value.push(+action.payload) : state.value.splice(index, 1);;
	},
	// addItem: (state, action) => {
	// 	// console.log({ a: state.value, b: +action.payload });
    // 	state.value.indexOf(+action.payload) === -1 && state.value.push(+action.payload);
	// },
	// removeItem: (state, action) => {
	// 	// console.log({ a: state.value, b: +action.payload });
    // 	state.value = state.value.filter(item => item !== +action.payload);
    // },
  },
});

export const selectCollection = state => state.collection.value;
export const { addItem, removeItem, toggleFavourite } = slice.actions;

export default slice.reducer;
