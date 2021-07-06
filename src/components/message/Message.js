import Button from "../button/Button";
import './style.css';
import {useDispatch, useSelector} from 'react-redux'
import { toggleDisplay } from './messageSlice'

function Message({ handleDo }){
    const dispatch = useDispatch();

    const ignorable = useSelector(state => state.rootReducer.messages.ignorable)
    const task = useSelector(state => state.rootReducer.messages.taskName)
    const message = useSelector(state => state.rootReducer.messages.content)

    function handleIgnore(){
        dispatch(toggleDisplay())
    }

    return (
        <div id="messageContainer">
            <h2>{message}</h2>

            {/*conditionally renders ignore button if possible*/}
            {ignorable && <Button handleClick={handleIgnore} label={'Just a Minute'}/>}

            <Button handleClick={handleDo} label={task} />
        </div>
    )
}

export default Message;