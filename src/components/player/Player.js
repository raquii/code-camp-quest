import Character from "../character/Character"
import Alert from "../../alert/Alert";
import { PLAYER_DIMENTIONS } from "../../config/constants";

function Player({frame, direction, position, isAction}) {
    
    return (
        <>
           {isAction && 
            <Alert 
                image={`/sprites/question.png`} 
                position={position}
            />
           }
            
            <Character 
                sprite={`/sprites/characters/Amelia.png`} 
                data={PLAYER_DIMENTIONS} 
                frame={frame} 
                direction={direction} 
                position={position} 
            />
        </>
    )
}

export default Player;