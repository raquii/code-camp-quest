import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: true,
    content: 'Welcome to the Game',
    ignorable: true,
    endGame: false,
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        toggleDisplay: state => {
            state.display = !state.display
        },
        setMessage: (state, action) =>{
            state.display = !state.display
            state.content = action.payload
            state.ignorable = true
        },
        setGameOver: (state)=>{
            state.display = true
            state.content = 'Oh no! Game Over!'
            state.ignorable = true
            state.endGame = true
        },
        resetMessage: state =>{
            return initialState
        }
    }
})

const { toggleDisplay, setMessage, setGameOver, resetMessage } = messageSlice.actions;

export { toggleDisplay, setMessage, setGameOver, resetMessage }

export default messageSlice.reducer