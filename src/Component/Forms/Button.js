function Button({className,funcClick = ()=>{},value}){
    return <buton className={className} onClick={funcClick}>{value}</buton>
}
export default Button