export const VIEWPORT_SIZE = 384;

const X = { walk: false, action: false, special: false};
const O = { walk: true, action: false, special: false};
const AO = { walk: true, action: true, special: false};
const AX = { walk: false, action: true, special: false};
const S ={ walk: true, action: false, special: true}

const BEDROOM_MAP = [ //each element in the nested array equals a tile on the x-axis
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
    [X, X, X, X, X, X, X, X, X, X, X, X], // y= 2
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 3
    [X, X, AX, AX, X, AO, O, X, AO, AO, X, X], // y = 4
    [X, X, AO, AO, O, O, O, O, AO, AO, X, X], // y = 5
    [X, X, O, O, O, O, O, O, O, O, X, X], // y = 6
    [X, X, O, O, O, O, O, O, O, O, O, O], // y = 7
    [X, X, X, O, O, O, O, O, O, O, O, O], // y = 8
    [X, X, X, O, O, O, O, O, O, O, X, X], // y = 9
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 10
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 11
]
const OFFICE_MAP = [ //each element in the nested array equals a tile on the x-axis
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
    [X, X, X, X, X, X, X, X, X, X, X, X], // y= 2
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 3
    [X, X, X, X, X, X, X, X, X, X, X, X],  // y = 4 
    [X, X, AX, AX, X, AX, AX, X, O, O, X, X], // y = 5
    [X, O, AO, AO, O, AO, AO, O, O, O, X, X], // y = 6
    [O, O, O, O, O, O, O, O, O, O, O, O], // y = 7
    [O, O, O, O, O, O, O, O, O, O, O, O], // y = 8
    [X, X, O, O, O, O, O, O, O, O, X, X], // y = 9
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 10
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 11
]

const KITCHEN_MAP = [ //each element in the nested array equals a tile on the x-axis
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
    [X, X, X, X, X, X, X, X, X, X, X, X], // y= 2
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 3
    [X, AX, AX, X, AX, AX, AX, X, AX, X, X, X],  // y = 4 
    [X, AO, AO, O, AO, AO, AO, O, AO, X, X, X], // y = 5
    [X, O, O, O, O, O, O, O, O, O, X, X], // y = 6
    [O, O, O, O, O, O, O, O, O, O, O, S], // y = 7
    [O, O, O, O, O, O, O, AO, AO, O, O, S], // y = 8
    [X, X, O, O, O, O, AO, AO, AO, O, X, X], // y = 9
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 10
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 11
]

const OUTSIDE_MAP1 = [ //each element in the nested array equals a tile on the x-axis
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
    [X, X, X, X, X, X, X, X, X, X, X, X], // y= 2
    [X, O, O, O, O, O, X, X, O, O, O, O], // y = 3
    [X, O, O, O, O, O, X, X, O, O, O, O],  // y = 4 
    [X, O, O, O, O, O, O, O, O, O, O, O], // y = 5
    [X, O, O, O, O, O, O, O, O, O, O, O], // y = 6
    [O, O, O, O, O, X, X, O, O, O, O, O], // y = 7
    [O, O, O, O, O, X, X, O, O, O, O, O], // y = 8
    [X, O, O, O, O, O, O, O, O, O, O, O], // y = 9
    [X, O, O, O, O, O, O, O, O, O, O, O], // y = 10
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 11
]

const OUTSIDE_MAP2 = [ //each element in the nested array equals a tile on the x-axis
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
    [X, X, X, X, X, X, X, X, X, X, X, X], // y= 2
    [O, O, O, O, O, O, X, X, X, X, X, X], // y = 3
    [O, O, O, O, O, O, O, O, O, X, X, X],  // y = 4 
    [O, O, O, O, O, O, O, O, O, X, X, X], // y = 5
    [O, O, O, O, O, O, O, O, O, O, O, O], // y = 6
    [O, O, O, O, O, O, O, O, O, O, O, O], // y = 7
    [O, O, O, O, O, X, X, O, O, O, O, O], // y = 8
    [O, O, O, O, X, X, X, X, O, O, O, O], // y = 9
    [O, O, O, O, X, X, X, X, O, O, O, O], // y = 10
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 11
]

const OUTSIDE_MAP3 = [ //each element in the nested array equals a tile on the x-axis
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
    [X, X, X, X, X, X, X, X, X, X, X, X], // y= 2
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 3
    [X, X, X, X, X, X, O, O, O, O, X, X],  // y = 4 
    [X, X, X, X, X, X, O, O, O, O, O, X], // y = 5
    [O, O, O, O, O, O, O, O, O, O, O, X], // y = 6
    [O, O, O, O, O, O, O, O, O, O, O, X], // y = 7
    [O, O, O, O, X, O, O, X, O, O, O, X], // y = 8
    [X, X, O, O, X, O, O, X, O, O, O, X], // y = 9
    [X, X, X, X, X, O, O, X, X, X, X, X], // y = 10
    [X, X, X, X, X, X, X, X, X, X, X, X], // y = 11
]

export const MAP_TABLE = [
    [...BEDROOM_MAP[0], ...OFFICE_MAP[0], ...KITCHEN_MAP[0], ...OUTSIDE_MAP1[0], ...OUTSIDE_MAP2[0], ...OUTSIDE_MAP3[0]],
    [...BEDROOM_MAP[1], ...OFFICE_MAP[1], ...KITCHEN_MAP[1], ...OUTSIDE_MAP1[1], ...OUTSIDE_MAP2[1], ...OUTSIDE_MAP3[1]],
    [...BEDROOM_MAP[2], ...OFFICE_MAP[2], ...KITCHEN_MAP[2], ...OUTSIDE_MAP1[2], ...OUTSIDE_MAP2[2], ...OUTSIDE_MAP3[2]],
    [...BEDROOM_MAP[3], ...OFFICE_MAP[3], ...KITCHEN_MAP[3], ...OUTSIDE_MAP1[3], ...OUTSIDE_MAP2[3], ...OUTSIDE_MAP3[3]],
    [...BEDROOM_MAP[4], ...OFFICE_MAP[4], ...KITCHEN_MAP[4], ...OUTSIDE_MAP1[4], ...OUTSIDE_MAP2[4], ...OUTSIDE_MAP3[4]],
    [...BEDROOM_MAP[5], ...OFFICE_MAP[5], ...KITCHEN_MAP[5], ...OUTSIDE_MAP1[5], ...OUTSIDE_MAP2[5], ...OUTSIDE_MAP3[5]],
    [...BEDROOM_MAP[6], ...OFFICE_MAP[6], ...KITCHEN_MAP[6], ...OUTSIDE_MAP1[6], ...OUTSIDE_MAP2[6], ...OUTSIDE_MAP3[6]],
    [...BEDROOM_MAP[7], ...OFFICE_MAP[7], ...KITCHEN_MAP[7], ...OUTSIDE_MAP1[7], ...OUTSIDE_MAP2[7], ...OUTSIDE_MAP3[7]],
    [...BEDROOM_MAP[8], ...OFFICE_MAP[8], ...KITCHEN_MAP[8], ...OUTSIDE_MAP1[8], ...OUTSIDE_MAP2[8], ...OUTSIDE_MAP3[8]],
    [...BEDROOM_MAP[9], ...OFFICE_MAP[9], ...KITCHEN_MAP[9], ...OUTSIDE_MAP1[9], ...OUTSIDE_MAP2[9], ...OUTSIDE_MAP3[9]],
    [...BEDROOM_MAP[10], ...OFFICE_MAP[10], ...KITCHEN_MAP[10], ...OUTSIDE_MAP1[10], ...OUTSIDE_MAP2[10], ...OUTSIDE_MAP3[10]],
    [...BEDROOM_MAP[11], ...OFFICE_MAP[11], ...KITCHEN_MAP[11], ...OUTSIDE_MAP1[11], ...OUTSIDE_MAP2[11], ...OUTSIDE_MAP3[11]],
];

export const PLAYER_FRAMES = 6;
export const PLAYER_DIMENTIONS = { h: 45, w: 32 };

export const DOG_FRAMES = 4;
export const DOG_DIMENTIONS = {h: 32, w: 32};

export const ACTIONS = { 
    42: 'dresser',
    43: 'dresser',
    52: 'dresser',
    53: 'dresser',

    48: 'bed',
    49: 'bed',
    58: 'bed',
    59: 'bed',

    45: 'window',

    514: 'clock',
    614: 'clock',

    515: 'plant',
    616: 'plant',

    517: 'computer',
    518: 'computer',
    617: 'computer',
    618: 'computer',

    425: 'fridge',
    525: 'fridge',
    426: 'fridge',
    526: 'fridge',

    428: 'sink',
    528: 'sink',
    429: 'sink',
    529: 'sink',

    430: 'coffee',
    530: 'coffee',

    432: 'stove',
    532: 'stove',
   
    831: 'bowl',
    832: 'bowl',
    930: 'bowl',
    931: 'bowl',
    932: 'bowl',
}





