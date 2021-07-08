import './style.css';

function Console({message = "It's another great day to code!"}){
    return (
        <div id="console-container">
            <div id="console">
                <p className="typewriter">&gt; {message}</p>
                
            </div>
        </div>
    )
}

export default Console;