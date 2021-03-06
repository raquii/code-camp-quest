import Sprite from "../sprite/Sprite";

function Character({ sprite, data, top, left, frame = 0, direction = 0 }) {
    //destructuring data prop
    const { h, w } = data;
    

    //passing props down to sprite component
    return (
        <Sprite
            image={sprite}
            top={top}
            left={left}
            data={{
                x: frame * w,
                y: direction * h,
                w,
                h,
            }}
        />
    )
}

export default Character;