export const RED_TILE = {walk: false, action: false, dog: false};
export const GREEN_TILE = {walk: true, action: false, dog: false};
export const ACTION_TILE = {walk: true, action: true, dog: false};
export const DOG_TILE = {walk: true, action: false, dog: true};

export const MAP_TABLE = [
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, ACTION_TILE, GREEN_TILE, RED_TILE, RED_TILE, ACTION_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, ACTION_TILE, ACTION_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, ACTION_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE],
    [RED_TILE, RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE],
    [RED_TILE, RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, DOG_TILE, DOG_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],
];

export const PLAYER_FRAMES = 6;
export const PLAYER_DIMENTIONS = {h: 45, w: 32};
export const PLAYER_SIZE = 40;

export const DIRECTION_AXIS = { left: 'x', right: 'x', up: 'y', down: 'y'}