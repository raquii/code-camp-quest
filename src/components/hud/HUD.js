import StatBar from "../statbar/StatBar";
import Clock from "../clock/Clock";
import './style.css';

function HUD() {
    return (
        <div id='HUDDiv'>
            <Clock/>
            <div id='statsContainer'>
                <StatBar stat={100} statName={"food"} />
                <StatBar stat={80} statName={"walk"} />
                <StatBar stat={90} statName={"play"} />
            </div> 
        </div>
    )
}

export default HUD;