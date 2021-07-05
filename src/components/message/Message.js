import Button from "../button/Button";
import './style.css';

function Message({message, ignorable, task, handleDo, handleIgnore}){

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