import React from "react";

type props = {
    title?:string,
    onClick?:()=>void,
    className?:string,
    children?:string,
    disabled?:boolean,
    icon?:JSX.Element,
}
export const FlatButton = ({title, onClick, className, children, disabled, icon}:props)=>{
    return(
        <div>
            <button disabled={disabled} className={`btn btn-md ${className}`} onClick={onClick}>{title} {children} {icon}</button>
        </div>
    )
}