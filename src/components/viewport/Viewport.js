import './style.css'
import { VIEWPORT_SIZE } from '../../config/constants';
import {useDispatch, useSelector} from 'react-redux'

import useWalk from '../../hooks/useWalk';
import useKeyboard from '../../hooks/useKeyboard';
import useAction from '../../hooks/useAction';
import Player from "../player/Player";
import Map from "../map/Map";
import Message from '../message/Message';



function Viewport() {
    const { direction, animationFrame, dogAnimationFrame, position, dogPosition, walk } = useWalk();
    const { action, isAction, actionAlert } = useAction();

    const message = useSelector(state => state.rootReducer.message.display)

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

    function handleDo() {
        console.log('Doing')
    }

    return (
        <div id="viewportContainer" style={{ width: VIEWPORT_SIZE, height: VIEWPORT_SIZE }}>

            <div style={{ zIndex: 10 }} >
                {message &&
                    <Message handleDo={handleDo} />
                }
            </div>


            <Player
                frame={animationFrame}
                direction={direction}
                position={position}
                isAction={isAction}
                dogFrame={dogAnimationFrame}
                dogPosition={dogPosition}
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