import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type){
        case 'bed':
            return{}
        case 'dresser':
            return{}
        case 'window':
            return{}
        case 'clock':
            return{}
        case 'computer':
            return{}
        case 'fridge':
            return{}
        case 'sink':
            return{}
        case 'coffee':
            return{}
        case 'stove':
            return{}
        case 'bowl':
            return{}
        case 'outside':
            return{}
    }
}

function getAction(){
    const [state, dispatch] = useReducer(reducer, {obj: null})

}