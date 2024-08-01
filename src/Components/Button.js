const Button = ({onCLickHandler, value, title}) => {
return (
    <button onClick={onCLickHandler} value={value} className="btns">
        {title}
    </button>
)
}

export default Button