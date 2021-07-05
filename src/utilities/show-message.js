import { createContext, useState } from "react";

const MessageContext = createContext();

function ShowMessage({children}){
    const [showMessage, setShowMessage] = useState(true);
    const value = [showMessage, setShowMessage];
    
    return(
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    )
}

export {MessageContext, ShowMessage}