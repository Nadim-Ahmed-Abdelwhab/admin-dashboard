import { configureStore } from '@reduxjs/toolkit';
import user from '@/features/users/usersSlice'
export const store  = configureStore({
    reducer : {
        user,
    }
})


export type GlopalStore = ReturnType < typeof store.getState >;
export type Dispatch = typeof store.dispatch;