import { MAP_TABLE } from "../config/constants";

function getNextTile(direction, position) {
    let newPos;
    let X;
    let Y;

    switch (direction) {
        case 'down':
            newPos = position.top + 24;
            X = ((position.left + 192) - (position.left % 32)) / 32;
            Y = (newPos - (newPos % 32)) / 32;
            return MAP_TABLE[Y][X]["walk"];
 
        case 'left':
            newPos = (position.left + 192) - 18;
            X = (newPos - (newPos % 32)) / 32;
            Y = (position.top - (position.top % 32)) / 32;
            return MAP_TABLE[Y][X]["walk"];
    
        case 'right':
            newPos = (position.left + 192) + 18
            X = (newPos - (newPos % 32)) / 32
            Y = (position.top - (position.top % 32)) / 32
            return MAP_TABLE[Y][X]["walk"];
 
        case 'up':
            newPos = position.top - 2
            X = ((position.left + 192) - (position.left % 32)) / 32
            Y = (newPos - (newPos % 32)) / 32
            return MAP_TABLE[Y][X]["walk"];
            
        default: ;
    };
}

export default getNextTile;