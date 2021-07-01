import Character from "../character/Character";
import { useState } from "react";

function Dog() {
    const [isIdle, setIsIdle] = useState(false);

    return <Character sprite={`/sprites/characters/pup.png`} data={DOG_DIMENTIONS} frame={animationFrame} direction={direction} position={position} />

}

export default Dog;