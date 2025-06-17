type props = {
    title:string,
    onCLick:()=>void,
    className?:string
}
export const FlatButton = ({title, onCLick, className}:props)=>{
    return(
        <div>
            <button className={`btn btn-md ${className}`} onClick={onCLick}>{title}</button>
        </div>
    )
}