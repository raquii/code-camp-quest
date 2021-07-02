import { MAP_TABLE } from "../config/constants";

function getNextTile(direction, position) {
    const currentXCord = ((position.x + 192) - (position.x % 32)) / 32
    const currentYCord = (position.y - (position.y % 32)) / 32

    switch (direction) {
        case 'down':
            return MAP_TABLE[currentYCord + 1][currentXCord]["walk"];
        case 'left':
            return MAP_TABLE[currentYCord][currentXCord]["walk"];
        case 'right':
            return MAP_TABLE[currentYCord][currentXCord + 1]["walk"];
        case 'up':
            return MAP_TABLE[currentYCord][currentXCord]["walk"];
        default: ;
    };
}

export default getNextTile;