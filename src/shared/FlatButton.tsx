type props = {
    title?:string,
    onClick?:()=>void,
    className?:string,
    children?:string,
    disabled?:boolean,
}
export const FlatButton = ({title, onClick, className, children, disabled}:props)=>{
    return(
        <div>
            <button disabled={disabled} className={`btn btn-md ${className}`} onClick={onClick}>{title} {children}</button>
        </div>
    )
}