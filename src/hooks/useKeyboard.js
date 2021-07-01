import { useEffect } from "react";

function useKeyboard(fn){
    useEffect(()=> {
        window.addEventListener("keydown", fn);

        return() => window.removeEventListener("keydown", fn);
    }, [fn])
};

export default useKeyboard;