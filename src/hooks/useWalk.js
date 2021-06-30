import { useState } from "react";

function useWalk(maxSteps){
    const [direction, setDirection] = useState(0);
    const [step, setStep] = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});

    const stepSize = 2;

    const dirMap ={
        down: 0,
        left: 1,
        right: 2,
        up: 3,
    };

    const movementMap = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    function walk(direction){
        setDirection(prevDir => {
            if(dirMap[direction] === prevDir) getNewPosition(direction);
            return dirMap[direction];
        })
        setStep(step => step < maxSteps - 1 ? step + 1 : 0)
    }

    function getNewPosition(direction){
        setPosition((prev)=> ({
            x: prev.x + movementMap[direction].x,
            y: prev.y + movementMap[direction].y,
        }))
    }

    return {
        walk, direction, step, position
    }
}

export default useWalk;