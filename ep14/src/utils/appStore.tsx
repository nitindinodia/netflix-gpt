import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice' // userSlice.reducer

const appStore = configureStore(
    {
        reducer: {
            user: userReducer
        }
    }
);

export default appStore;