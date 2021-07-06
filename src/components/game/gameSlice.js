import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paused: false,
    foodStat: 100,
    walkStat: 100,
    playStat: 100,
    taskStat: 0,
    totalTasks: [],
    day: 1,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        togglePaused: state => {
            state.paused = !state.paused
        },
        newDay: (state, action) => {
            state.day += 1
            state.totalTasks = action.payload

        },
        decreaseStats: state => {
            state.foodStat -= 1
        }
    }
    
})

const { togglePaused } = gameSlice.actions;

export { togglePaused }

export default gameSlice.reducer