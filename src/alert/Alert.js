
function Alert({position, image}){

    return(
        <div
            style={{
                position: "absolute",
                zIndex: 2,
                top: position.y -45,
                left: "192px",
                height: `32px`,
                width: `32px`,
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
            }}
        />
    )
}

export default Alert;