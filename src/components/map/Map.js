import MapTile from "./MapTile";
import './style.css'

function Map({ x }) {

    return (
        <div id="map"
            style={{
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: -x,

            }}
        >

            <MapTile map={`bedroom`} />
            <MapTile map={`office`} />
            <MapTile map={`kitchen`} />
            
            <MapTile map={'outside1'} />
            <MapTile map={'outside2'} />
            <MapTile map={'outside3'} />
        </div>
    )
}

export default Map;