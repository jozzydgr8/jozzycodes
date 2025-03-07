import { ReactNode } from "react"
import ReactDOM from "react-dom";

type portalProps = {
    children: ReactNode
}
export const Portal = ({children}:portalProps)=>{
   const portalRoot = document.getElementById("portal-root");
   if(!portalRoot) return null;
    
   return ReactDOM.createPortal(children, portalRoot);
}