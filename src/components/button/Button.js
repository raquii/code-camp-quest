function Button({ label, handleClick, className="button", hoverLabel }){
    return (
        <button 
            onClick = { handleClick } 
            type = "button" 
            className={className}
        > 
            <span className="regular">
                { label }  
            </span>
            <span className="onHover">
                { hoverLabel }
            </span>
        </button>
    )
}

export default Button;