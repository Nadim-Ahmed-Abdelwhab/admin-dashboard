import { createSlice } from "@reduxjs/toolkit"
import { ThemeState } from "../appTypes";


const initialState : ThemeState = {
    mode: 
    typeof window !== 'undefined'
    ? (localStorage.getItem('mode') as 'light' | 'dark') || 'dark' 
    : 'dark'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme : (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('mode' , state.mode);
        },
    },
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;