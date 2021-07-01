import './style.css';

function StatBar({ stat = 100, statName = "food" }) {
    return (
        <div id="statDiv">
                <p id="statName">{statName}</p>
                <div id="statBarContainer" >
                        <div
                            id="statDisplay"
                            style={{
                                backgroundColor: "red",
                                width: `${stat}px`,
                                height: "13px",
                            }} 
                        />
                </div>
        </div>
    )
}
export default StatBar;