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
    message: `It's another amazing day to code!`,
    dog: 'Luna',
    bowl: false,
    outside: false,
};


//need to create daily task array by passing state.day to getDailyTasks
const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        togglePaused: state => {
            state.paused = !state.paused
        },
        toggleBowl: (state, action) => {
            state.bowl = !state.bowl
            state.message = action.payload
        },
        toggleOutside: (state, action) => {
            state.outside = !state.outside
            state.message = action.payload
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

const { togglePaused, toggleBowl, toggleOutside, newDay, decreaseStat, increaseStat, setMessage, resetGame } = gameSlice.actions;

export { togglePaused, toggleBowl, toggleOutside, newDay, decreaseStat, increaseStat, setMessage, resetGame }

export default gameSlice.reducer