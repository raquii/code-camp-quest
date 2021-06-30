function Map(){
    return(
        <div id="map">
            <div id="bedroom"
                style={{
                    backgroundImage: `url(/maps/bedroom.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0px 0px",
                    display: "inline-block",
                    width:"384px",
                    height:"384px",
                }}
            >
            </div>
            <div id="office"
                style={{
                    backgroundImage: `url(/maps/office.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0px 0px",
                    display: "inline-block",
                    width:"384px",
                    height:"384px",
                }}
            >
            </div>
            <div id="kitchen"
                style={{
                    backgroundImage: `url(/maps/kitchen.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0px 0px",
                    display: "inline-block",
                    width:"384px",
                    height:"384px",
                }}
            >
            </div>

        </div>
    )
}

export default Map;