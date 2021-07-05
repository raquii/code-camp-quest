function Button({ label, handleClick }){
    return <button onClick = { handleClick } type = "button" > { label }</button>
}

export default Button;