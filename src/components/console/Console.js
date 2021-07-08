import './style.css';
import { useEffect } from 'react';

function Console({message = "It's another great day to code!"}){

    useEffect(() => {
        let p = document.getElementById('consoleText');

        p.classList.remove("typewriter");
        void p.offsetWidth;
        p.classList.add("typewriter");
        
    }, [message])

    return (
        <div id="console-container">
            <div id="console">
                <p id='consoleText' className="typewriter">&gt; {message}</p>
            </div>
        </div>
    )
}

export default Console;