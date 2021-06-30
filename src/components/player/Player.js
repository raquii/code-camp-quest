import Character from "../character/Character"
import useKeyboard from "../../hooks/useKeyboard";
import useWalk from "../../hooks/useWalk";

function Player() {
    //destructuring useWalk, setting number of animations in sprite sheet
    const { direction, step, walk, position } = useWalk(6)

    //setting sprite dimentions for player.
    const data = {
        h: 45,
        w: 32
    };

    //controls hook
    useKeyboard((e) => {
        e.preventDefault()
        
        if(e.key.includes("Arrow")){
            walk(e.key.replace("Arrow", "").toLowerCase());
        }else if(e.key==="Enter"){
            //need to make an interact hook
            console.log(e.key)
        }
        
    })

    return <Character sprite={`/sprites/characters/Amelia.png`} data={data} step={step} direction={direction} position={position} />

}

export default Player;