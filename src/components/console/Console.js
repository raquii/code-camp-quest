import './style.css';
import { useEffect } from 'react';


function Console({message = "It's another great day to code!"}){

    //resets typing css animation with each new message
    useEffect(() => {
        let p = document.getElementById('console-text');

        p.classList.remove("typewriter");
        void p.offsetWidth;
        p.classList.add("typewriter");
        
    }, [message])

    return (
        <div id="console-container">
            <div id="console">
                <p id='console-text' className="typewriter">&gt; {message}</p>
                
            </div>
        </div>
    )
}

export default Console;