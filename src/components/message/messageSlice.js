import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: true,
    content: 'Welcome to the Game',
    ignorable: true,
    taskName: 'Play'
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        toggleDisplay: state => {
            state.display = !state.display
        },
        setMessageText: (state, action) =>{
            state.content = action.payload
        },
        toggleIgnorable: state => {
            state.ignorable = !state.ignorable
        },
        setTaskName: (state, action) =>{
            state.taskName = action.payload
        },
    }
})

const { toggleDisplay, setMessageText, toggleIgnorable, setTaskName } = messageSlice.actions;

export { toggleDisplay, setMessageText, toggleIgnorable, setTaskName }

export default messageSlice.reducer