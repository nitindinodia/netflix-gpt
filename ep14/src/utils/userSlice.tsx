import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        //sign up
        addUser: (state, action)=>{
            return action.payload;
        },
        //log out
        removeUser: (state, action)=>{
            return null;
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
