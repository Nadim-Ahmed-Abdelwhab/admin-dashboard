import { configureStore } from '@reduxjs/toolkit';
import user from '@/features/users/usersSlice';
import theme from '@/features/theme/theme';
import products from '@/features/Products/products'
export const store  = configureStore({
    reducer : {
        user,
        theme,
        products
    }
})


export type GlopalStore = ReturnType < typeof store.getState >;
export type Dispatch = typeof store.dispatch;