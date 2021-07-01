import Character from "../character/Character"
import useKeyboard from "../../hooks/useKeyboard";
import useWalk from "../../hooks/useWalk";
import useAction from "../../hooks/useAction";
import { PLAYER_DIMENTIONS } from "../../config/constants";

function Player() {
    const {direction, animationFrame, position, walk} = useWalk();
    const {action} = useAction();

    //controls hook
    useKeyboard((e) => {
        e.preventDefault()

        switch(e.keyCode){
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
            default:;
        } 
    })

    return <Character sprite={`/sprites/characters/Amelia.png`} data={PLAYER_DIMENTIONS} frame={animationFrame} direction={direction} position={position} />

}

export default Player;