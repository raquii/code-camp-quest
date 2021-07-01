import './style.css'
import { VIEWPORT_SIZE } from '../../config/constants';

function Viewport({children}){
    return(
        <div id="viewportContainer" style={{width: VIEWPORT_SIZE, height:VIEWPORT_SIZE}}>
            {children}

        </div>
    )
}

export default Viewport;