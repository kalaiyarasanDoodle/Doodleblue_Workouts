import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  //   {
  //   id:1,
  //   title:'react'
  // },
  // {
  //   id:2,
  //   title:'Angular'
  // },
];

export const TodoSlice = createSlice({
  name: 'TodoListItems',
  initialState: initialState,
  reducers: {
    addfunc: (state, action) => {
      // state = [...state, action.payload]
      // const newTasks = [...state, action.payload];
      // console.log('newwww stacvk=====>', newTasks);
      state.push(action.payload);
      console.log('state=====>', state);
      console.log('actionm===>', action.payload.title);
    },
    deletefun: () => {},
    editfun: () => {},
  },
});
export const {addfunc} = TodoSlice.actions;

export default TodoSlice.reducer;
