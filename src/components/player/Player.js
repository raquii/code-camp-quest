import Character from "../character/Character"
import useKeyboard from "../../hooks/useKeyboard";
import useWalk from "../../hooks/useWalk";

function Player() {
    const { direction, step, walk, position } = useWalk(6)

    const data = {
        h: 45,
        w: 32
    };

    useKeyboard((e) => {
        e.preventDefault()
        walk(e.key.replace("Arrow", "").toLowerCase());
    })

    return <Character sprite={`/sprites/characters/Amelia.png`} data={data} step={step} direction={direction} position={position} />

}

export default Player;