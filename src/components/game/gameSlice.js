import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paused: false,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        togglePaused: state => {
            state.paused = !state.paused
        },
    }
})

const { togglePaused } = gameSlice.actions;

export { togglePaused }

export default gameSlice.reducer