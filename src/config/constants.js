export const VIEWPORT_SIZE = 384;

const RED_TILE = { walk: false, action: false, dog: false };
const GREEN_TILE = { walk: true, action: false, dog: false };
const ACTION_TILE = { walk: true, action: true, dog: false };
const DOG_TILE = { walk: true, action: false, dog: true };
const ACTION_HELPER_TILE = { walk: false, action: true, dog: false };

const BEDROOM_MAP = [ //each element in the nested array equals a tile on the x-axis
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 0
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 1
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y= 2
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 3
    [RED_TILE, RED_TILE, ACTION_HELPER_TILE, ACTION_HELPER_TILE, RED_TILE, ACTION_TILE, GREEN_TILE, RED_TILE, ACTION_TILE, ACTION_TILE, RED_TILE, RED_TILE], // y = 4
    [RED_TILE, RED_TILE, ACTION_TILE, ACTION_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, ACTION_TILE, ACTION_TILE, RED_TILE, RED_TILE], // y = 5
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE], // y = 6
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE], // y = 7
    [RED_TILE, RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE], // y = 8
    [RED_TILE, RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, DOG_TILE, DOG_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE], // y = 9
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 10
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 11
]
const OFFICE_MAP = [ //each element in the nested array equals a tile on the x-axis
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 0
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 1
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y= 2
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 3
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],  // y = 4 
    [RED_TILE, RED_TILE, ACTION_TILE, RED_TILE, RED_TILE, ACTION_HELPER_TILE, RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE], // y = 5
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, ACTION_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE], // y = 6
    [GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE], // y = 7
    [GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE], // y = 8
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, DOG_TILE, DOG_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE], // y = 9
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 10
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 11
]

const KITCHEN_MAP = [ //each element in the nested array equals a tile on the x-axis
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 0
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 1
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y= 2
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 3
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE],  // y = 4 
    [RED_TILE, RED_TILE, ACTION_TILE, GREEN_TILE, ACTION_TILE, ACTION_TILE, ACTION_TILE, GREEN_TILE, ACTION_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 5
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE, RED_TILE], // y = 6
    [GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, RED_TILE], // y = 7
    [GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, ACTION_TILE, GREEN_TILE, GREEN_TILE, RED_TILE], // y = 8
    [RED_TILE, RED_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, GREEN_TILE, ACTION_TILE, DOG_TILE, ACTION_TILE, RED_TILE, RED_TILE], // y = 9
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 10
    [RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE, RED_TILE], // y = 11
]

export const MAP_TABLE = [
    [...BEDROOM_MAP[0], ...OFFICE_MAP[0], ...KITCHEN_MAP[0],],
    [...BEDROOM_MAP[1], ...OFFICE_MAP[1], ...KITCHEN_MAP[1],],
    [...BEDROOM_MAP[2], ...OFFICE_MAP[2], ...KITCHEN_MAP[2],],
    [...BEDROOM_MAP[3], ...OFFICE_MAP[3], ...KITCHEN_MAP[3],],
    [...BEDROOM_MAP[4], ...OFFICE_MAP[4], ...KITCHEN_MAP[4],],
    [...BEDROOM_MAP[5], ...OFFICE_MAP[5], ...KITCHEN_MAP[5],],
    [...BEDROOM_MAP[6], ...OFFICE_MAP[6], ...KITCHEN_MAP[6],],
    [...BEDROOM_MAP[7], ...OFFICE_MAP[7], ...KITCHEN_MAP[7],],
    [...BEDROOM_MAP[8], ...OFFICE_MAP[8], ...KITCHEN_MAP[8],],
    [...BEDROOM_MAP[9], ...OFFICE_MAP[9], ...KITCHEN_MAP[9],],
    [...BEDROOM_MAP[10], ...OFFICE_MAP[10], ...KITCHEN_MAP[10],],
    [...BEDROOM_MAP[11], ...OFFICE_MAP[11], ...KITCHEN_MAP[11],],
];

export const PLAYER_FRAMES = 6;
export const PLAYER_DIMENTIONS = { h: 45, w: 32 };

// export const DOG_DIMENTIONS = {}

export const DIRECTION_AXIS = { left: 'x', right: 'x', up: 'y', down: 'y' }