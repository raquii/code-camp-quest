function Sprite({ image, data, top, left }) {
    //destructuring data prop
    const { y, x, h, w } = data;

    //using CSS tricks to animate sprite sheet
    return <div
        style={{
            position: "absolute",
            zIndex: 2,
            top: top - 13,
            left: `${left}px`,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x}px -${y}px`,
        }}
    />
}

export default Sprite;