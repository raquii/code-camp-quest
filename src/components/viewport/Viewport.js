import './style.css'
import { VIEWPORT_SIZE } from '../../config/constants';
import { useSelector } from 'react-redux'

import useWalk from '../../hooks/useWalk';
import useKeyboard from '../../hooks/useKeyboard';
import useAction from '../../hooks/useAction';

import Player from "../player/Player";
import Map from "../map/Map";


function Viewport() {
    const { direction, animationFrame, dogAnimationFrame, position, dogPosition, walk } = useWalk();
    const { action, isAction, actionAlert } = useAction();

    const paused = useSelector(state => state.rootReducer.game.paused)

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


    return (
        <div id="viewportContainer" style={{ width: VIEWPORT_SIZE, height: VIEWPORT_SIZE }}>

            {paused &&
                <div className='paused' >
                    <span> PAUSED </span>
                </div>
            }


            <Player
                frame={animationFrame}
                direction={direction}
                position={position}
                isAction={isAction}
                dogFrame={dogAnimationFrame}
                dogPosition={dogPosition}
            />

            <Map
                x={position.left}
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