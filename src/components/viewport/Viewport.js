import './style.css'
import { VIEWPORT_SIZE } from '../../config/constants';
import useWalk from '../../hooks/useWalk';
import useKeyboard from '../../hooks/useKeyboard';
import useAction from '../../hooks/useAction';
import Player from "../player/Player";
import Map from "../map/Map";

function Viewport() {
    const { direction, animationFrame, position, walk } = useWalk();
    const { action } = useAction();

    //controls hook
    useKeyboard((e) => {
        e.preventDefault()

        switch (e.keyCode) {
            case 40:
            case 83:
                return walk('down')
            case 37:
            case 65:
                return walk('left')
            case 39:
            case 68:
                return walk('right')
            case 38:
            case 87:
                return walk('up')
            case 13:
            case 32:
                return action(position)
            default: ;
        }
    })

    return (
        <div id="viewportContainer" style={{ width: VIEWPORT_SIZE, height: VIEWPORT_SIZE }}>

            <Player
                frame={animationFrame}
                direction={direction}
                position={position}
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