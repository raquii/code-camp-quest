import { createSlice } from "@reduxjs/toolkit";
import getDailyTasks from "../../utilities/get-daily-tasks";

const initialState = {
    paused: false,
    stats: {
        foodStat: 100,
        walkStat: 100,
    },
    taskStat: 0,
    totalTasks: [1,1,1,1,1,1],
    day: 1,
    message: `It's another amazing day to code!`
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
            const newTasks = getDailyTasks(state.day)
            state.day += 1
            state.totalTasks = newTasks
        },
        decreaseStat: (state, action) => {
            const stat = action.payload
            state.stats[stat] -= 1
        },
        increaseStat: (state, action) => {
            const stat = action.payload
            state.stats[stat] += 1
        },
        setMessage: (state, action)=>{
            state.message = action.payload
        },
        resetGame: state =>{
            return initialState
        }
    }

})

const { togglePaused, newDay, decreaseStat, increaseStat, setMessage, resetGame } = gameSlice.actions;

export { togglePaused, newDay, decreaseStat, increaseStat, setMessage, resetGame }

export default gameSlice.reducer