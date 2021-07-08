import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: true,
    text: 'Welcome to the Game',
    secondBtn: true
    
    
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
        },
        setGameOver: (state)=>{
            state.display = true
            state.content = 'Oh no! Game Over!'
           
        },
        resetMessage: state =>{
            return initialState
        }
    }
})

const { toggleDisplay, setMessage, setGameOver, resetMessage } = messageSlice.actions;

export { toggleDisplay, setMessage, setGameOver, resetMessage }

export default messageSlice.reducer