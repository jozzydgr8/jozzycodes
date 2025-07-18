

type props = {
    title?:string,
    onClick?:()=>void,
    className?:string,
    children?:string,
    disabled?:boolean,
    icon?:JSX.Element,
    type?:"button" | "submit" | "reset" | undefined,
}
export const FlatButton = ({title, onClick, className, children, disabled, icon, type}:props)=>{
    return(
        <div>
            <button type={ type|| 'button'} disabled={disabled} className={`btn btn-md ${className}`} onClick={onClick}>{title} {children} {icon}</button>
        </div>
    )
}