
// import { MAP_TABLE } from "../../config/constants";
import MapTile from "./MapTile";

function Map() {

    /* This is for debugging the MAP_TABLE*/

    // const mapGrid = MAP_TABLE.map((row, y)=>(
    //     <div key = {y} style={{display: "flex"}}>
    //         {row.map(tile => (
    //             <div key={tile} style = {{ boxSizing: "border-box", borderTop: "1px solid black", borderRight: "1px solid black", width: "32px", height: "32px", backgroundColor: tile.walk ? "green" : "red", opacity: 0.5}} />
    //         ))}
    //     </div>))

    return (
        <div id="map">
            <MapTile map={`bedroom`} />
            <MapTile map={`office`} />
            <MapTile map={`kitchen`} />
       </div>
    )
}

export default Map;