import { createSlice } from "@reduxjs/toolkit";
import getDailyTasks from "../../utilities/get-daily-tasks";

const initialState = {
    paused: true,
    stats: {
        foodStat: 100,
        walkStat: 100,
    },
    taskStat: 0,
    totalTasks: [1,1,1,1,1,1],
    day: 1,
    message: ``,
    dog: '',
    bowl: false,
    outside: false,
    gameover: false,
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
        toggleOutside: state => {
            state.outside = !state.outside
            state.message = state.outside ? `Let's go for a walk!` : 'Okay, back to work.'
        },
        newDay: state => {
            const newTasks = getDailyTasks(state.day)
            state.day += 1
            state.totalTasks = newTasks
            state.message = `It's a new day!`
        },
        nameDog: (state, action)=>{
            state.dog = action.payload
            state.start = true
            state.paused = false
            state.message = `Good morning! What a great day to code!`
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
        endGame:(state, action)=>{
            state.gameover = true
            state.message = action.payload
        },
        resetGame: state =>{
            return initialState
        }
    }

})

const { togglePaused, toggleBowl, toggleOutside, newDay, nameDog, decreaseStat, increaseStat, setMessage, endGame, resetGame } = gameSlice.actions;

export { togglePaused, toggleBowl, toggleOutside, newDay, nameDog, decreaseStat, increaseStat, setMessage, endGame, resetGame }

export default gameSlice.reducer