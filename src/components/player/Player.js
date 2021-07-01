import Character from "../character/Character"
import useKeyboard from "../../hooks/useKeyboard";
import useWalk from "../../hooks/useWalk";
import { PLAYER_DIMENTIONS } from "../../config/constants";

function Player() {
    const {direction, animationFrame, position, tile, walk} = useWalk();
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
                console.log("action key pressed")
        } 
    })

    return <Character sprite={`/sprites/characters/Amelia.png`} data={PLAYER_DIMENTIONS} frame={animationFrame} direction={direction} position={position} />

}

export default Player;