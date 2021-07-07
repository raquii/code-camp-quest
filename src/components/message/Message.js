import Button from "../button/Button";
import './style.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { resetMessage, toggleDisplay } from './messageSlice'
import { togglePaused, resetGame } from '../game/gameSlice'

function Message({ handleDo }) {
    const dispatch = useDispatch();

    const ignorable = useSelector(state => state.rootReducer.message.ignorable)
    const endGame = useSelector(state => state.rootReducer.message.endGame)
    const message = useSelector(state => state.rootReducer.message.content)

    function handleIgnore() {
        if(endGame){
            dispatch(resetGame())
            dispatch(resetMessage())
        }else{
            dispatch(toggleDisplay())
            dispatch(togglePaused())
        }  
    }

    useEffect(() => {
        if(message) 
            dispatch(togglePaused())
    }, [dispatch, message])


    return (
        <div id="messageContainer">
            <h2>{message}</h2>

            {/*conditionally renders ignore button if possible*/}
            {ignorable && <Button handleClick={handleIgnore} label={endGame ? 'Reset':'Just a Minute'} />}

            <Button handleClick={handleDo} label={endGame ? 'Save My Score':'Go'} />
        </div>
    )
}

export default Message;