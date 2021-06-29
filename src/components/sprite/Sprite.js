function Sprite({ image, data, position }) {
    //destructuring data prop
    const { y, x, h, w } = data;

    //using CSS tricks to animate sprite sheet
    return <div
        style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x}px -${y}px`,
        }}
    />
}

export default Sprite;