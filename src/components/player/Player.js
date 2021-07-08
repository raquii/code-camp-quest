import Character from "../character/Character"

import { PLAYER_DIMENTIONS } from "../../config/constants";
import Sprite from "../sprite/Sprite";
import Dog from "../dog/Dog";

function Player({ frame, direction, dogFrame, position, dogPosition, isAction }) {
    const top = position.top;
    const left = 192;

    return (
        <>
            {isAction &&
                <Sprite
                    image={`/sprites/alert.png`}
                    data={{ h: 32, w: 32, x: 0, y: 0 }}
                    top={top - 30}
                    left={left}
                />
            }

            <Character
                sprite={`/sprites/characters/Amelia.png`}
                data={PLAYER_DIMENTIONS}
                frame={frame}
                direction={direction}
                top={top}
                left={left}
            />
            
            <Dog
                frame = {dogFrame}
                direction = {direction}
                top = {dogPosition.top}
                left = {dogPosition.left}
            />
        </>
    )
}

export default Player;