import Sprite from "../sprite/Sprite";

function Character({ sprite, data, position = { x: 0, y: 0 }, step = 0, direction = 0 }) {
    //destructuring data prop
    const { h, w } = data;

    //passing props down to sprite component
    return (
        <Sprite
            image={sprite}
            position={position}
            data={{
                x: step * w,
                y: direction * h,
                w,
                h,
            }}
        />
    )
}

export default Character;