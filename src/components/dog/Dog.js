import Character from "../character/Character";
import Sprite from "../sprite/Sprite";
import { DOG_DIMENTIONS } from "../../config/constants";
import { useSelector } from "react-redux";

function Dog({frame, direction, top, left}) {
    const hunger = useSelector(state => state.rootReducer.game.stats.foodStat)
    const walk = useSelector(state => state.rootReducer.game.stats.walkStat)

    return (
        <>
        {( hunger < 50 || walk < 50 )&&
                <Sprite
                    image={( hunger > 20 && walk > 20 ) ? `/sprites/alert.png` : '/sprites/bigalert.png'}
                    data={{ h: 32, w: 32, x: 0, y: 0 }}
                    top={top - 30}
                    left={left}
                />
            }
        <Character 
            sprite={`/sprites/characters/pup.png`} 
            data={DOG_DIMENTIONS} 
            frame={frame} 
            direction={direction} 
            top={top}
            left={left}
        />
        </>
    )
}

export default Dog;