const Button = ({ text, className, style }) => {
    return (
        <button type="button" className={className} style={style}>
            {text}
        </button>
    )
}

export default Button