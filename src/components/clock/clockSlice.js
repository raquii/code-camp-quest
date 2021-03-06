import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hour: 8,
    minute: 0,
    midday: false
};

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        minuteChange: state => {
            state.minute += 1
        },
        hourChange: state => {
            state.hour += 1
            state.minute = 0
        },
        middayToggle: state => {
            state.midday = !state.midday
            state.hour = 12
            state.minute = 0
        },
        afterNoon: state => {
            state.hour = 1
            state.minute = 0
        },
        resetClock: state=>{
            return initialState
        }
    }
})

const { minuteChange, hourChange, middayToggle, afterNoon, resetClock } = clockSlice.actions;

export { minuteChange, hourChange, middayToggle, afterNoon, resetClock }

export default clockSlice.reducer