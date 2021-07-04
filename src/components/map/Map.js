import MapTile from "./MapTile";
import './style.css'

function Map({ x }) {

    return (
        <div id="map"
            style={{
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: -x - 16,

            }}
        >

            <MapTile map={`bedroom`} />
            <MapTile map={`office`} />
            <MapTile map={`kitchen`} />
        </div>
    )
}

export default Map;