
// import { MAP_TABLE } from "../../config/constants";

function Map() {

    // const mapGrid = MAP_TABLE.map((row, y)=>(
    //     <div key = {y} style={{display: "flex"}}>
    //         {row.map(tile => (
    //             <div key={tile} style = {{ boxSizing: "border-box", borderTop: "1px solid black", borderRight: "1px solid black", width: "32px", height: "32px", backgroundColor: tile.walk ? "green" : "red", opacity: 0.5}} />
    //         ))}
    //     </div>))

    return (
        <div id="map">

            <div id="bedroom"
                style={{
                    boxSizing: "border-box",
                    backgroundImage: `url(/maps/bedroom.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0px 0px",
                    display: "inline-block",
                    width: "384px",
                    height: "384px"
                }}
            >
                {/* {mapGrid} */}
            </div>
            {/* <div id="office"
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
            </div> */}

        </div>
    )
}

export default Map;