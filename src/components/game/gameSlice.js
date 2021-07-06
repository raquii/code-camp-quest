import { createSlice } from "@reduxjs/toolkit";
import getDailyTasks from "../../utilities/get-daily-tasks";

const initialState = {
    paused: false,
    stats: {
        foodStat: 100,
        walkStat: 100,
        playStat: 100,
    },
    taskStat: 0,
    totalTasks: [],
    day: 1,
};

//need to create daily task array by passing state.day to getDailyTasks

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
        decreaseStat: (state, action) => {
            const stat = action.payload
            state.stats[stat] -= 1
        },
        increaseStat: (state, action) => {
            const stat = action.payload
            state.stats[stat] += 1
        }
    }

})

const { togglePaused, newDay, decreaseStat, increaseStat } = gameSlice.actions;

export { togglePaused, newDay, decreaseStat, increaseStat }

export default gameSlice.reducer