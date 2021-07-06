import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: true,
    content: '',
    ignorable: true,
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
    }
})

const { toggleDisplay, setMessageText, toggleIgnorable } = messageSlice.actions;

export { toggleDisplay, setMessageText, toggleIgnorable }

export default messageSlice.reducer