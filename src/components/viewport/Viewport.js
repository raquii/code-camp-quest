import './style.css'
import { VIEWPORT_SIZE } from '../../config/constants';
import { useContext } from 'react';
import useWalk from '../../hooks/useWalk';
import useKeyboard from '../../hooks/useKeyboard';
import useAction from '../../hooks/useAction';
import { MessageContext } from '../../utilities/show-message';
import Player from "../player/Player";
import Map from "../map/Map";
import Message from '../message/Message';

function Viewport() {
    const { direction, animationFrame, position, walk } = useWalk();
    const { action, isAction, actionAlert } = useAction();

    const [showMessage, setShowMessage] = useContext(MessageContext)

    //controls hook
    useKeyboard((e) => {
        e.preventDefault()

        switch (e.keyCode) {
            case 40:
            case 83:
                return walk('down') + actionAlert(position)
            case 37:
            case 65:
                return walk('left') + actionAlert(position)
            case 39:
            case 68:
                return walk('right') + actionAlert(position)
            case 38:
            case 87:
                return walk('up') + actionAlert(position)
            case 13:
            case 32:
                return action(position)
            default: ;
        }
    })

    function handleIgnore() {
        setShowMessage(!showMessage)
    }

    function handleDo() {
        console.log('Doing')
    }


    return (
        <div id="viewportContainer" style={{ width: VIEWPORT_SIZE, height: VIEWPORT_SIZE }}>

            <div style={{ zIndex: 10 }} >
                {showMessage && <Message message={'Testing, testing, 1, 2, 3.'} ignorable={true} task={'Walk the Dog'} handleDo={handleDo} handleIgnore={handleIgnore} />}
            </div>


            <Player
                frame={animationFrame}
                direction={direction}
                position={position}
                isAction={isAction}
            />
            <Map
                x={position.x}
            />

            <div
                id="viewportBG"
                style={{
                    width: VIEWPORT_SIZE,
                    height: VIEWPORT_SIZE,
                    zIndex: -1,
                    backgroundColor: "#1e1e2e"
                }}
            />
        </div>
    )
}

export default Viewport;