import Character from "../character/Character";
import { DOG_DIMENTIONS } from "../../config/constants";

function Dog({frame, direction, top, left}) {
    
    return <Character 
            sprite={`/sprites/characters/pup.png`} 
            data={DOG_DIMENTIONS} 
            frame={frame} 
            direction={direction} 
            top={top}
            left={left}
        />

}

export default Dog;